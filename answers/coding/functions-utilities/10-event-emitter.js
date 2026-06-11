/**
 * 10 — Event emitter (pub/sub): on, off, emit
 * Run: node 10-event-emitter.js
 */

const { runTests } = require("./test-utils");

class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(event, handler) {
    if (!this.events.has(event)) this.events.set(event, new Set());
    this.events.get(event).add(handler);
  }

  off(event, handler) {
    this.events.get(event)?.delete(handler);
  }

  emit(event, ...args) {
    this.events.get(event)?.forEach((handler) => handler(...args));
  }
}

const ok = runTests("EventEmitter", () => null, [
  {
    label: "emit calls handler",
    input: null,
    check: () => {
      const bus = new EventEmitter();
      let value = 0;
      bus.on("x", (n) => {
        value = n;
      });
      bus.emit("x", 42);
      return value === 42;
    },
  },
  {
    label: "multiple handlers",
    input: null,
    check: () => {
      const bus = new EventEmitter();
      const log = [];
      bus.on("e", () => log.push(1));
      bus.on("e", () => log.push(2));
      bus.emit("e");
      return log.join(",") === "1,2";
    },
  },
  {
    label: "off removes handler",
    input: null,
    check: () => {
      const bus = new EventEmitter();
      let count = 0;
      const handler = () => count++;
      bus.on("e", handler);
      bus.emit("e");
      bus.off("e", handler);
      bus.emit("e");
      return count === 1;
    },
  },
]);

process.exit(ok ? 0 : 1);
