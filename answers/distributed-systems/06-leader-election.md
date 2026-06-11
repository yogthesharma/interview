# Leader election — why do systems need it?

**Target time:** 60–90 seconds

---

## Talk track

> **Leader election** = pick **one** node as coordinator so the cluster doesn't have two brains writing the same data.
>
> **Used for:**
> - Database primary failover
> - Distributed job schedulers (only one cron runner)
> - Kafka partition leader (awareness)
> - Distributed locks with lease renewal
>
> **How it works (conceptually):**
> - Nodes compete via **consensus** (Raft, Paxos) or **coordination service** (etcd, ZooKeeper)
> - Winner gets a **lease** — must heartbeat; if it dies, others re-elect
>
> **You rarely implement this** — use managed services (RDS failover, DynamoDB leader per partition). Know the **problem** it solves: split-brain prevention.

---

## Split-brain without election

```
Node A: "I'm primary" → accepts writes
Node B: "I'm primary" → accepts writes
→ conflicting data, impossible merge
```

**Fix:** quorum + fencing token so stale primary can't commit.

---

## How this connects

| File | Why |
|------|-----|
| `distributed-systems/04` | Replication failover needs election |
| `distributed-systems/03` | Partitions trigger election storms if misconfigured |
| `performance-scalability/06` | Redis distributed locks — simpler but need TTL |

---

## Avoid

- Home-grown leader election for app logic — use DB unique constraint or SQS single consumer pattern instead
- Ignoring lease expiry — "zombie leader" after GC pause
