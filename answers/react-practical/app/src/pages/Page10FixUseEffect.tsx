import { useEffect, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { fetchMockUsers } from "../data/mock";

export default function Page10FixUseEffect() {
  const [userId, setUserId] = useState(1);
  const [userName, setUserName] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    setLoading(true);

    fetchMockUsers()
      .then((users) => {
        if (ctrl.signal.aborted) return;
        const u = users.find((x) => x.id === userId);
        setUserName(u?.name ?? "Not found");
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoading(false);
      });

    return () => ctrl.abort();
  }, [userId]);

  return (
    <ExerciseLayout
      id="10"
      title="Fix useEffect dependencies"
      goal="Changing user ID loads that user's name."
      checklist={["userId in dependency array", "Loading state", "No infinite loop"]}
    >
      <label>
        User ID:{" "}
        <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </label>
      <p>
        Selected:{" "}
        <strong>{loading ? "Loading…" : userName || "…"}</strong>
      </p>
      <p className="hint">Fixed: added [userId] deps + abort stale fetch.</p>
    </ExerciseLayout>
  );
}
