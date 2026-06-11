# What is CDK or SAM or Serverless Framework?

**Target time:** 45 seconds

---

## Talk track

> All are **Infrastructure as Code (IaC)** for defining AWS resources in code instead of clicking console.

| Tool | Style | Notes |
|------|-------|-------|
| **SAM** | YAML extensions on CloudFormation | AWS-native, Lambda/API GW focused |
| **Serverless Framework** | `serverless.yml` | Popular Node community, plugins |
| **CDK** | TypeScript/Python → CloudFormation | Full AWS surface, reusable constructs, type-safe |

> **What they define:** Lambda functions, API routes, SQS queues, DynamoDB tables, IAM roles, env vars — **one repo, reproducible deploys**.

> **Interview:** *"I've used [Serverless Framework / CDK / SAM] — principle is same: infra in git, CI runs deploy, no manual console drift."*

> **Related:** Terraform — cloud-agnostic, also common at scale.

---

## Code

```ts
// CDK (sketch)
new lambda.Function(this, "SubmitApp", {
  runtime: lambda.Runtime.NODEJS_20_X,
  handler: "submit.handler",
  environment: { QUOTE_QUEUE_URL: queue.queueUrl },
});
queue.grantSendMessages(submitFn);
```

```yaml
# serverless.yml (sketch)
functions:
  submit:
    handler: src/submit.handler
    events:
      - httpApi: { path: /applications, method: post }
    environment:
      QUOTE_QUEUE_URL: !Ref QuoteQueue
```

---

## Avoid

- Manual console changes not reflected in IaC — drift
