# How do you deploy Lambda functions?

**Target time:** 45–60 seconds

---

## Talk track

> **Pipeline:**
> 1. Code in git → PR → CI runs tests + lint  
> 2. Build — `esbuild` bundle, tree-shake deps  
> 3. `sam deploy` / `serverless deploy` / `cdk deploy` — upload zip to S3, update CloudFormation stack  
> 4. **Stages:** dev → staging → prod (separate stacks or accounts)  
> 5. **Aliases & versions** — `live` alias points to version; blue/green or gradual traffic shift  
> 6. **Rollback** — redeploy previous git tag / CloudFormation rollback

> **Env config:** SSM Parameter Store / Secrets Manager refs in IaC — not secrets in repo (aws/17).

> **CI example:** GitHub Actions on merge to main → deploy staging; tag → prod.

---

## Code

```yaml
# GitHub Actions (sketch)
- run: npm ci && npm test && npm run build
- run: npx serverless deploy --stage staging
  env:
    AWS_ROLE_ARN: ${{ secrets.AWS_DEPLOY_ROLE }}
```

```bash
# Manual (dev only)
npm run build
npx serverless deploy --stage dev
```

---

## Avoid

- Deploying from laptop to prod without CI gates
