# What is Step Functions? (awareness)

**Target time:** 30–45 seconds

---

## Talk track

> **Step Functions** = managed **workflow orchestrator** — coordinate multiple Lambdas/services with **visual state machine**.
>
> **States:** Task (invoke Lambda), Choice (branch), Wait, Parallel, Map (fan-out), Catch/Retry.
>
> **Use when:**
> - Multi-step process with **waits** (poll carrier every 5 min for 24h)  
> - Complex branching (approved → generate PDF → notify; rejected → email)  
> - Human approval step  
> - Better than chaining SQS messages for **orchestration logic**

> **vs SQS:** SQS = simple queue/worker; Step Functions = **workflow brain** with history and timeouts.

> **Awareness level for interview:** name it, one The company example, don't deep-dive ASL JSON unless asked.

---

## Code

```text
SubmitApplication
  → ValidateLambda
  → SaveToRDS
  → RequestQuoteLambda
  → Wait 30s
  → CheckQuoteStatusLambda
  → Choice: ready? → NotifyLambda : Wait again (with max attempts)
  → Catch errors → FailureNotifyLambda
```

---

## Avoid

- Step Functions for trivial single-Lambda job — SQS is simpler
