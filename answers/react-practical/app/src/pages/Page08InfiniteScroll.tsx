import { useCallback, useEffect, useRef, useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";
import { generateItems } from "../data/mock";

const ALL_ITEMS = generateItems(60);
const PAGE_SIZE = 15;
const LOAD_DELAY_MS = 400;

export default function Page08InfiniteScroll() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const hasMore = visibleCount < ALL_ITEMS.length;
  const items = ALL_ITEMS.slice(0, visibleCount);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((c) => Math.min(c + PAGE_SIZE, ALL_ITEMS.length));
      setLoading(false);
    }, LOAD_DELAY_MS);
  }, [loading, hasMore]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = el!;
      if (scrollHeight - scrollTop - clientHeight < 80) {
        loadMore();
      }
    }

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [loadMore]);

  return (
    <ExerciseLayout
      id="08"
      title="Infinite scroll list"
      goal="Load more items when scrolling near bottom."
      checklist={[
        "Scroll container",
        "Loads next chunk near bottom",
        "Loading indicator",
        "Stops when all loaded",
      ]}
    >
      <p>
        Showing {items.length} / {ALL_ITEMS.length}
      </p>
      <div className="scroll-box" ref={scrollRef}>
        <ul className="plain">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {loading && <p className="hint">Loading more…</p>}
        {!hasMore && <p className="hint">All items loaded</p>}
      </div>
    </ExerciseLayout>
  );
}
