import { useMemo, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { USERS } from "../data/mock";
import { useDebounce } from "../hooks/useDebounce";

const DEBOUNCE_MS = 300;

export default function Page06DebouncedSearch() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, DEBOUNCE_MS);
  const isDebouncing = query !== debouncedQuery;

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return USERS;
    return USERS.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.company.toLowerCase().includes(q),
    );
  }, [debouncedQuery]);

  return (
    <ExerciseLayout
      id="06"
      title="Debounced search"
      goal="Filter list after 300ms debounce."
      checklist={[
        "Input updates immediately",
        "Results update after debounce",
        "Timer cleanup in hook",
      ]}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search…"
      />
      <p className="hint">
        {isDebouncing ? "Waiting for pause…" : `Showing results for "${debouncedQuery || "all"}"`}
      </p>
      <ul className="plain">
        {filtered.map((u) => (
          <li key={u.id}>
            {u.name} — {u.company}
          </li>
        ))}
      </ul>
    </ExerciseLayout>
  );
}
