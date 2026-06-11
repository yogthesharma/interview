import { useEffect, useRef, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";

export default function Page11FixStaleClosure() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("interval sees count:", countRef.current);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <ExerciseLayout
      id="11"
      title="Fix stale closure"
      goal="Console logs current count every 2s."
      checklist={["Ref holds latest count", "Interval cleaned up", "Console matches UI"]}
    >
      <p>Count: {count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
      <p className="hint">Fixed: ref synced with count so interval always reads latest value.</p>
    </ExerciseLayout>
  );
}
