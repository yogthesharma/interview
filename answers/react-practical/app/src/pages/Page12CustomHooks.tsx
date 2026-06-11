import { useMemo, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";

type Post = { id: number; title: string; body: string };

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export default function Page12CustomHooks() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 400);
  const shouldFetch = debounced.trim().length > 0;

  const { data, loading, error, refetch } = useFetch<Post[]>(
    shouldFetch ? POSTS_URL : null,
  );

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = debounced.toLowerCase();
    return data.filter((p) => p.title.toLowerCase().includes(q)).slice(0, 8);
  }, [data, debounced]);

  return (
    <ExerciseLayout
      id="12"
      title="Custom hooks"
      goal="useDebounce + useFetch wired together."
      checklist={[
        "useDebounce in hooks/",
        "useFetch with loading/error/refetch",
        "Debounced search filters fetched posts",
      ]}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search posts (debounced)…"
      />
      <p className="hint">Debounced: &quot;{debounced}&quot;</p>

      {loading && <p>Loading…</p>}
      {error && (
        <p className="error">
          {error.message}{" "}
          <button type="button" className="secondary" onClick={refetch}>
            Retry
          </button>
        </p>
      )}
      {!loading && !error && filtered.length > 0 && (
        <ul className="plain">
          {filtered.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
      {!loading && debounced && filtered.length === 0 && !error && data && (
        <p className="hint">No matching posts.</p>
      )}
    </ExerciseLayout>
  );
}
