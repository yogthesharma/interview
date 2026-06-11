/**
 * BUG: Leak — interval + listener never removed
 * node 04-memory-leak-broken.js
 */

const EventEmitter = require("events");
const bus = new EventEmitter();

class Poller {
  constructor() {
    this.tick = 0;
    this.onResize = () => this.poll();
    bus.on("resize", this.onResize);
    this.intervalId = setInterval(() => this.poll(), 500);
  }

  poll() {
    this.tick++;
    if (this.tick % 4 === 0) console.log("poll", this.tick);
  }

  destroy() {
    // BUG: forgot cleanup
    console.log("destroy called but timers/listeners still active");
  }
}

const p = new Poller();
setTimeout(() => {
  p.destroy();
  console.log("After destroy — polls should stop (they won't in broken version)");
}, 2200);
