/**
 * BUGGY React — read and spot issues (not wired to app; study file)
 * See solutions/09-sluggish-react-fixed.tsx
 */

import { useState } from "react";

const ALL_ITEMS = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  category: i % 2 === 0 ? "even" : "odd",
}));

function Row({
  item,
  onSelect,
}: {
  item: { id: number; name: string };
  onSelect: (id: number) => void;
}) {
  console.count("Row render");
  return (
    <li>
      <button type="button" onClick={() => onSelect(item.id)}>
        {item.name}
      </button>
    </li>
  );
}

export function SluggishSearchBroken() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  // BUG: heavy filter every render, no useMemo
  const filtered = ALL_ITEMS.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.includes(query),
  );

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search…"
      />
      <p>Selected: {selected}</p>
      <ul>
        {filtered.map((item, index) => (
          // BUG: index key
          <Row
            key={index}
            item={item}
            onSelect={(id) => setSelected(id)}
          />
        ))}
      </ul>
    </div>
  );
}
