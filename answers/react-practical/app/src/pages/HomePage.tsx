import { Link } from "react-router-dom";

const EXERCISES = [
  { path: "/01-search-filter", num: "01", title: "Search filters list", type: "build" },
  { path: "/02-paginated-list", num: "02", title: "Paginated list", type: "build" },
  { path: "/03-todo-list", num: "03", title: "Todo add / delete / toggle", type: "build" },
  { path: "/04-form-validation", num: "04", title: "Form with validation", type: "build" },
  { path: "/05-fetch-display", num: "05", title: "Fetch & display API data", type: "build" },
  { path: "/06-debounced-search", num: "06", title: "Debounced search", type: "build" },
  { path: "/07-modal-dropdown", num: "07", title: "Modal & dropdown", type: "build" },
  { path: "/08-infinite-scroll", num: "08", title: "Infinite scroll list", type: "build" },
  { path: "/09-fix-rerenders", num: "09", title: "Fix excessive re-renders", type: "fix" },
  { path: "/10-fix-use-effect", num: "10", title: "Fix useEffect dependencies", type: "fix" },
  { path: "/11-fix-stale-closure", num: "11", title: "Fix stale closure bug", type: "fix" },
  { path: "/12-custom-hooks", num: "12", title: "Custom hooks (useDebounce / useFetch)", type: "build" },
];

export default function HomePage() {
  return (
    <div className="home">
      <h1>React — practical</h1>
      <p>All 12 exercises implemented — browse routes and read the source in <code>src/pages/</code>.</p>
      <p>
        Run: <code>npm run dev</code> from <code>app/</code>
      </p>
      <ul className="exercise-list">
        {EXERCISES.map((ex) => (
          <li key={ex.path}>
            <Link to={ex.path}>
              <span className="badge">{ex.num}</span>
              {ex.title}
              <span className={`tag tag-${ex.type}`}>{ex.type}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
