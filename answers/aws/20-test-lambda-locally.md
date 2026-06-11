# How do you test Lambda locally?

**Target time:** 45 seconds

---

## Talk track

> **Layers:**
> 1. **Unit tests** — extract handler logic to pure functions; Jest/Vitest with mocks (no AWS)  
> 2. **Integration** — `@aws-sdk/client-mock` or LocalStack for SQS/DynamoDB  
> 3. **SAM CLI** — `sam local invoke` with sample event JSON  
> 4. **Serverless Offline** — emulate API Gateway + Lambda locally  
> 5. **Deploy to dev stage** — smoke test against real AWS dev account

> **Pattern:** keep handler thin — `export const handler = (e) => service.process(parse(e))` — test `service.process` heavily.

> **Event fixtures:** commit `events/sqs-quote-request.json` for reproducible local invokes.

---

## Code

```ts
// Unit test — no Lambda runtime
import { processQuoteRequest } from "../services/quote";

test("requests quote for valid application", async () => {
  const mockCarrier = { requestQuote: vi.fn().mockResolvedValue({ premium: 100 }) };
  await processQuoteRequest({ applicationId: "app_1" }, { carrier: mockCarrier });
  expect(mockCarrier.requestQuote).toHaveBeenCalledWith("app_1");
});
```

```bash
sam local invoke SubmitFunction -e events/submit.json
```

---

## Avoid

- Only testing in prod
