import { useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { INITIAL_TODOS, type Todo } from "../data/mock";

function newId() {
  return crypto.randomUUID();
}

export default function Page03TodoList() {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);
  const [text, setText] = useState("");

  function addTodo() {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [...prev, { id: newId(), text: trimmed, done: false }]);
    setText("");
  }

  function toggle(id: string) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  function remove(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <ExerciseLayout
      id="03"
      title="Todo list"
      goal="Add todos, toggle complete, delete items."
      checklist={[
        "Input + Add button adds todo",
        "Checkbox toggles done (line-through style)",
        "Delete removes item",
        "Stable keys (id)",
      ]}
    >
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="New todo…"
        />
        <button type="button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="plain">
        {todos.map((t) => (
          <li key={t.id} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggle(t.id)}
            />
            <span className={t.done ? "todo-done" : undefined}>{t.text}</span>
            <button
              type="button"
              className="secondary"
              style={{ marginLeft: "auto" }}
              onClick={() => remove(t.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </ExerciseLayout>
  );
}
