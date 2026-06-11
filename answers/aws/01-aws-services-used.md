# What AWS services have you used?

**Target time:** 60 seconds

---

## Talk track

> Frame as **honest senior IC** — depth on what you touched, awareness on the rest. Typical stack is likely **Lambda + API Gateway + DynamoDB + SQS/SNS/EventBridge + S3 + RDS/Postgres + IAM + CloudWatch**.

> **Say concretely (adapt to your resume):**
> - **Compute:** Lambda for async jobs; long-running APIs often **ECS/Fargate or EC2** with Node/Fastify (Atlys-style)  
> - **API:** API Gateway in front of Lambda; ALB in front of containers  
> - **Data:** RDS Postgres + Prisma for relational; DynamoDB for events/idempotency at scale  
> - **Messaging:** SQS workers, SNS fan-out, EventBridge for domain events  
> - **Storage:** S3 for PDFs, census uploads, generated documents  
> - **Ops:** CloudWatch logs/alarms; Secrets Manager; IAM roles per service  
> - **IaC:** CDK or Serverless Framework / SAM — team standard

> **If lighter AWS hands-on:** *"Most production depth on Node APIs and Postgres; I've designed around AWS serverless patterns and deployed [X] — comfortable ramping on your stack in week one."*

---

## Code

```text
Typical B2B SaaS-style flow (name-drop in interview):

API Gateway → Lambda (validate/submit application)
           → SQS (quote request queue)
           → Lambda worker → external carrier API
           → DynamoDB (job status) + RDS (application record)
           → SNS/EventBridge (application.submitted)
           → Lambda → email / webhook
S3 ← presigned upload for census PDF
CloudWatch ← structured logs + alarms on DLQ depth
```

---

## Avoid

- Claiming expert on every service — pick 3–4 you can go deep on
