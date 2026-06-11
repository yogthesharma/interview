import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page01SearchFilter from "./pages/Page01SearchFilter";
import Page02PaginatedList from "./pages/Page02PaginatedList";
import Page03TodoList from "./pages/Page03TodoList";
import Page04FormValidation from "./pages/Page04FormValidation";
import Page05FetchDisplay from "./pages/Page05FetchDisplay";
import Page06DebouncedSearch from "./pages/Page06DebouncedSearch";
import Page07ModalDropdown from "./pages/Page07ModalDropdown";
import Page08InfiniteScroll from "./pages/Page08InfiniteScroll";
import Page09FixRerenders from "./pages/Page09FixRerenders";
import Page10FixUseEffect from "./pages/Page10FixUseEffect";
import Page11FixStaleClosure from "./pages/Page11FixStaleClosure";
import Page12CustomHooks from "./pages/Page12CustomHooks";
import "./App.css";

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/01-search-filter" element={<Page01SearchFilter />} />
        <Route path="/02-paginated-list" element={<Page02PaginatedList />} />
        <Route path="/03-todo-list" element={<Page03TodoList />} />
        <Route path="/04-form-validation" element={<Page04FormValidation />} />
        <Route path="/05-fetch-display" element={<Page05FetchDisplay />} />
        <Route path="/06-debounced-search" element={<Page06DebouncedSearch />} />
        <Route path="/07-modal-dropdown" element={<Page07ModalDropdown />} />
        <Route path="/08-infinite-scroll" element={<Page08InfiniteScroll />} />
        <Route path="/09-fix-rerenders" element={<Page09FixRerenders />} />
        <Route path="/10-fix-use-effect" element={<Page10FixUseEffect />} />
        <Route path="/11-fix-stale-closure" element={<Page11FixStaleClosure />} />
        <Route path="/12-custom-hooks" element={<Page12CustomHooks />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
