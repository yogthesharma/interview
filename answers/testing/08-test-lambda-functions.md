# How do you test Lambda functions?

**Target time:** 45 seconds — honest

---

## Talk track

> **Unit:** extract **handler logic** into plain functions — test without AWS. Pass mock event/context objects.
>
> **Integration:** **invoke handler** with sample API Gateway / SQS event JSON; mock AWS SDK clients (`DynamoDBDocumentClient`) with `aws-sdk-client-mock` or similar.
>
> **Local:** SAM local invoke, serverless-offline for smoke.
>
> **E2E:** deploy to staging, run synthetic checks — fewer, slower.
>
> **Honest:** most my depth is **Node handler unit tests + Fastify inject**; full Lambda CI is team/platform dependent. I'd follow The company patterns for event fixtures.

---

## Code

```ts
// Extract core logic
export function processApplication(event: ApplicationEvent) {
  return { status: "accepted", id: event.applicationId };
}

// Test
test("accepts valid application", () => {
  expect(processApplication({ applicationId: "abc" }).status).toBe("accepted");
});

// Handler wires AWS
export const handler = async (event: APIGatewayEvent) => {
  const body = JSON.parse(event.body ?? "{}");
  return { statusCode: 200, body: JSON.stringify(processApplication(body)) };
};
```

---

## Avoid

- Only manual testing in AWS console for every change
