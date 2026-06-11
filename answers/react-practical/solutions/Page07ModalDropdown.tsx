import { useEffect, useRef, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";

export default function Page07ModalDropdown() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <ExerciseLayout
      id="07"
      title="Modal & dropdown"
      goal="Modal with backdrop; dropdown with click-outside close."
      checklist={[
        "Modal open/close + backdrop",
        "Escape closes modal",
        "Dropdown toggles; click outside closes",
      ]}
    >
      <section style={{ marginBottom: "1.5rem" }}>
        <h3>Modal</h3>
        <button type="button" onClick={() => setModalOpen(true)}>
          Open modal
        </button>
      </section>

      <section>
        <h3>Dropdown</h3>
        <div className="dropdown" ref={dropdownRef}>
          <button type="button" onClick={() => setMenuOpen((o) => !o)}>
            Actions ▾
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <button type="button" onClick={() => setMenuOpen(false)}>
                Edit
              </button>
              <button type="button" onClick={() => setMenuOpen(false)}>
                Delete
              </button>
            </div>
          )}
        </div>
      </section>

      {modalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h3>Confirm action</h3>
            <p>Modal content here.</p>
            <button type="button" onClick={() => setModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </ExerciseLayout>
  );
}
