import { useMemo, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { USERS } from "../data/mock";

export default function Page01SearchFilter() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return USERS;
    return USERS.filter(
      (u) =>
        u.name.toLowerCase().includes(q) || u.company.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <ExerciseLayout
      id="01"
      title="Search input filters a list"
      goal="Type in search → list filters live by name or company."
      checklist={[
        "Controlled text input",
        "Case-insensitive filter on name + company",
        "Shows count or empty state",
      ]}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search name or company…"
      />
      <p>{filtered.length} result(s)</p>
      {filtered.length === 0 ? (
        <p className="hint">No results</p>
      ) : (
        <ul className="plain">
          {filtered.map((u) => (
            <li key={u.id}>
              {u.name} — {u.company}
            </li>
          ))}
        </ul>
      )}
    </ExerciseLayout>
  );
}
