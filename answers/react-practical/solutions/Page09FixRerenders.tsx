import { memo, useCallback, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";

const ExpensiveChild = memo(function ExpensiveChild({
  onLog,
}: {
  onLog: () => void;
}) {
  console.count("ExpensiveChild render");
  return (
    <div>
      <p className="render-count">ExpensiveChild (check console render count)</p>
      <button type="button" onClick={onLog}>
        Log action
      </button>
    </div>
  );
});

export default function Page09FixRerenders() {
  const [text, setText] = useState("");
  const onLog = useCallback(() => console.log("clicked"), []);

  return (
    <ExerciseLayout
      id="09"
      title="Fix excessive re-renders"
      goal="Typing should NOT rerender ExpensiveChild (see console)."
      checklist={[
        "React.memo on child",
        "Stable useCallback for handler",
        "Input still works",
      ]}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here — child should stay quiet"
      />
      <ExpensiveChild onLog={onLog} />
      <p className="hint">Fixed: memo + stable callback instead of inline arrow each render.</p>
    </ExerciseLayout>
  );
}
