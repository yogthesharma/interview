import { useCallback, useEffect, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { fetchMockUsers, type User } from "../data/mock";

export default function Page05FetchDisplay() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const load = useCallback(async (signal: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMockUsers();
      if (signal.aborted) return;
      setUsers(data);
    } catch (e) {
      if (signal.aborted) return;
      setError(e instanceof Error ? e.message : "Failed to load");
      setUsers(null);
    } finally {
      if (!signal.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    const ctrl = new AbortController();
    load(ctrl.signal);
    return () => ctrl.abort();
  }, [load, attempt]);

  return (
    <ExerciseLayout
      id="05"
      title="Fetch and display API data"
      goal="Loading → list OR error with retry."
      checklist={[
        "Loading state while fetching",
        "Renders user names on success",
        "Error message + retry on failure",
        "Abort on unmount",
      ]}
    >
      {loading && <p>Loading…</p>}
      {error && (
        <div>
          <p className="error">{error}</p>
          <button type="button" onClick={() => setAttempt((a) => a + 1)}>
            Retry
          </button>
        </div>
      )}
      {!loading && !error && users && (
        <ul className="plain">
          {users.map((u) => (
            <li key={u.id}>
              {u.name} ({u.company})
            </li>
          ))}
        </ul>
      )}
    </ExerciseLayout>
  );
}
