/**
 * 07 — LRU cache with get / put (capacity evicts least recently used)
 * Run: node 07-lru-cache.js
 */

const { runTests } = require("./test-utils");

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    if (!this.map.has(key)) return undefined;
    const value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    else if (this.map.size >= this.capacity) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey);
    }
    this.map.set(key, value);
  }
}

const ok = runTests("LRUCache", () => null, [
  {
    label: "get/set basic",
    input: null,
    check: () => {
      const cache = new LRUCache(2);
      cache.put("a", 1);
      cache.put("b", 2);
      return cache.get("a") === 1 && cache.get("b") === 2;
    },
  },
  {
    label: "evicts LRU when full",
    input: null,
    check: () => {
      const cache = new LRUCache(2);
      cache.put("a", 1);
      cache.put("b", 2);
      cache.put("c", 3);
      return (
        cache.get("a") === undefined &&
        cache.get("b") === 2 &&
        cache.get("c") === 3
      );
    },
  },
  {
    label: "get refreshes recency",
    input: null,
    check: () => {
      const cache = new LRUCache(2);
      cache.put("a", 1);
      cache.put("b", 2);
      cache.get("a");
      cache.put("c", 3);
      return cache.get("b") === undefined && cache.get("a") === 1;
    },
  },
]);

process.exit(ok ? 0 : 1);
