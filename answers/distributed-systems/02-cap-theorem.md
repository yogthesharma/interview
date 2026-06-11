# CAP theorem — what does it actually mean?

**Target time:** 60 seconds

---

## Talk track

> **CAP:** in a network partition, you choose between **Consistency** (all nodes see same data) and **Availability** (every request gets a response).
>
> **Partition (P)** isn't optional — networks fail. So under partition you pick **C or A**, not all three at once.
>
> **Real-world nuance:** it's not binary forever. Most systems are **AP with tunable consistency** (DynamoDB, Cassandra) or **CP with failover** (etcd, ZooKeeper).
>
> **Interview sound bite:** "We design for partition tolerance, then decide per use case whether stale reads or downtime hurts more."

---

## Examples

| System | Under partition tends to… |
|--------|---------------------------|
| DynamoDB | Favor availability; eventual consistency option |
| Postgres primary | Favor consistency; replicas may lag or promote |
| SQS | Available; ordering/consistency is best-effort |

---

## How this connects

| File | Why |
|------|-----|
| `distributed-systems/03` | Partition tolerance in practice |
| `distributed-systems/04` | Replication is where CAP bites |
| `system-design/07` | Traffic spike — availability vs consistency choices |

---

## Avoid

- "CAP means pick two of three always" — oversimplified; modern DBs offer sliders
- Using CAP to justify bad architecture without naming the actual failure mode
