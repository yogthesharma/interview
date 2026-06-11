# How do you do blue-green or canary deployments?

**Target time:** 8 min

---

## Talk track

> Reduce risk by shifting traffic gradually or switching environments.

---

## Blue-green

```
Blue  = current prod (v1)
Green = new stack (v2) deployed alongside
Switch load balancer / API GW target all traffic Green → instant cutover
Keep Blue warm for quick revert
```

**Pros:** fast rollback (switch back)  
**Cons:** 2x infra cost during deploy

---

## Canary

```
95% traffic → v1
 5% traffic → v2
Watch error rate, latency for 15 min
Ramp 25% → 50% → 100% or auto-rollback on alarm
```

**Tools:** ECS deployment circuit breaker, API Gateway weighted targets, LaunchDarkly + flags, Argo Rollouts.

---

## Lambda variant

```
Publish version 2
Alias `live` weighted: 90% v1, 10% v2
CloudWatch alarm on v2 errors → set 100% v1
```

---

## With database changes

- Canary only safe if **v2 reads/writes compatible schema** with v1 (expand/contract — file 20)

---

## Avoid

- Canary without metrics — you're just hoping
