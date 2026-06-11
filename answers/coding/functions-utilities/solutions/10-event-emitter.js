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

module.exports = { EventEmitter };
