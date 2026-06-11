# How do you manage secrets in AWS?

**Target time:** 45 seconds

---

## Talk track

> **Never** in git, Lambda env plaintext in console without rotation, or frontend bundles.

> **AWS options:**
> - **Secrets Manager** — DB passwords, API keys; **automatic rotation**  
> - **SSM Parameter Store** — config + SecureString (cheaper, manual rotation)  
> - **Lambda** reads at cold start: `secretsManager.getSecretValue()` — cache in memory for warm invocations

> **Flow:**
> 1. Secret stored in Secrets Manager  
> 2. IAM role allows `secretsmanager:GetSecretValue` on that ARN only  
> 3. IaC references secret ARN — inject at deploy  
> 4. Rotate → next Lambda cold start picks up new value

> **Cross-ref:** `auth/10-secrets-in-code.md` — same principles, AWS-native tooling.

---

## Code

```ts
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

let cachedDbUrl: string | undefined;

async function getDbUrl() {
  if (cachedDbUrl) return cachedDbUrl;
  const res = await sm.send(new GetSecretValueCommand({ SecretId: "prod/rds/url" }));
  cachedDbUrl = res.SecretString!;
  return cachedDbUrl;
}
```

```yaml
# serverless — reference, not plaintext
environment:
  DB_SECRET_ARN: arn:aws:secretsmanager:...:secret:prod/rds
```

---

## Avoid

- `JWT_SECRET` in `serverless.yml` committed to git
