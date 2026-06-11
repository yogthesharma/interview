import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  goal: string;
  checklist: string[];
  children: ReactNode;
};

export function ExerciseLayout({ id, title, goal, checklist, children }: Props) {
  return (
    <div className="exercise">
      <nav className="exercise-nav">
        <Link to="/">← All exercises</Link>
      </nav>
      <header>
        <p className="exercise-id">{id}</p>
        <h1>{title}</h1>
        <p className="goal">{goal}</p>
      </header>
      <ul className="checklist">
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <section className="workspace">{children}</section>
    </div>
  );
}
