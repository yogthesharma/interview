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
    clearInterval(this.intervalId);
    bus.off("resize", this.onResize);
    console.log("destroy — cleaned up");
  }
}

const p = new Poller();
setTimeout(() => {
  p.destroy();
  console.log("After destroy — polls stopped");
}, 2200);
