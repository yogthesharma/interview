import { useMemo, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { USERS } from "../data/mock";

const PAGE_SIZE = 4;

export default function Page02PaginatedList() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(USERS.length / PAGE_SIZE);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return USERS.slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <ExerciseLayout
      id="02"
      title="Paginated list"
      goal={`Show ${PAGE_SIZE} users per page with Prev / Next.`}
      checklist={[
        "Displays current page items",
        "Prev disabled on page 1",
        "Next disabled on last page",
        "Shows Page X of Y",
      ]}
    >
      <p>
        Page {page} of {totalPages}
      </p>
      <ul className="plain">
        {pageItems.map((u) => (
          <li key={u.id}>
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
        <button
          type="button"
          className="secondary"
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Prev
        </button>
        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </ExerciseLayout>
  );
}
