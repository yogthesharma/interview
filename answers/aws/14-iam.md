# What is IAM?

**Target time:** 45–60 seconds

---

## Talk track

> **IAM** (Identity and Access Management) = **who can do what** on AWS.
>
> **Users** — humans (avoid long-lived keys; use SSO).  
> **Roles** — assumed by **Lambda, ECS, EC2** — no static keys in code.  
> **Policies** — JSON permissions: `s3:GetObject` on `arn:...:bucket/acme/*`.

> **Lambda pattern:** each function gets **least-privilege role** — submit Lambda can `sqs:SendMessage` + `dynamodb:PutItem`, not `s3:DeleteBucket`.

> **Multi-tenant:** IAM doesn't replace app tenant checks (auth/11) — it secures **AWS resources**; your code secures **employer data**.

> **Cross-account:** role trust for partner integrations.

---

## Code

```json
{
  "Effect": "Allow",
  "Action": ["sqs:SendMessage"],
  "Resource": "arn:aws:sqs:us-east-1:123456789:quote-requests"
}
```

```ts
// Lambda uses execution role automatically — SDK picks up creds
// No AWS_ACCESS_KEY_ID in .env in Lambda
```

---

## Avoid

- One god-admin role for all Lambdas
