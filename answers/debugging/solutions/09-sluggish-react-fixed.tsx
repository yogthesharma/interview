import { memo, useCallback, useMemo, useState } from "react";

const ALL_ITEMS = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  category: i % 2 === 0 ? "even" : "odd",
}));

const Row = memo(function Row({
  item,
  onSelect,
}: {
  item: { id: number; name: string };
  onSelect: (id: number) => void;
}) {
  return (
    <li>
      <button type="button" onClick={() => onSelect(item.id)}>
        {item.name}
      </button>
    </li>
  );
});

export function SluggishSearchFixed() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return ALL_ITEMS.slice(0, 100); // also: paginate / virtualize
    return ALL_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(q) || item.category.includes(q),
    ).slice(0, 100);
  }, [query]);

  const onSelect = useCallback((id: number) => setSelected(id), []);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search…"
      />
      <p>Selected: {selected}</p>
      <ul>
        {filtered.map((item) => (
          <Row key={item.id} item={item} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
}
