# When would you NOT use microservices?

**Target time:** 90 seconds — final-round favorite

---

## Talk track

> **Don't use microservices when the problem is organizational maturity, not scale.**
>
> **Stay monolith (or modular monolith) when:**
> - Team < ~8–10 engineers — ops tax exceeds benefit
> - Domain boundaries unclear — you'll split wrong and pay forever
> - Need **strong cross-entity transactions** — distributed sagas are expensive
> - Deploy cadence is unified anyway — one product, one release train
> - You're pre-PMF — speed of iteration beats independent scaling
> - Observability/tracing culture isn't there — you'll fly blind
>
> **Senior IC sound bite:** "I'd start modular monolith with clear package boundaries. Split when **team topology** or **independent scaling** forces it — not because Netflix did it."

---

## Red flags for premature microservices

```
- "Resume-driven architecture"
- 50 services, 3 engineers
- Every user action = 6 sync HTTP hops
- No correlation IDs, no distributed tracing
- Shared database with "logical" service split
```

---

## When split *does* make sense

- Quote/carrier integration owned by separate team with different deploy cadence
- PDF generation needs GPU/memory profile unlike API Lambdas
- Regulatory boundary — audit-isolated service

See also `system-design/15` for balanced comparison.

---

## Avoid

- Microservices to avoid talking to another team — that's a people problem
- Sync choreography across 8 services for one user click
