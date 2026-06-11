# TypeScript — conceptual (questions.md § TypeScript — conceptual)

Two demo + two practice files cover all **18** questions.

## Setup (once)

```bash
cd answers/typescript
npm install
```

## Run demos

```bash
npm run demo:01    # core: interface, union, unknown, never, as const…
npm run demo:02    # generics, utilities, discriminated unions, React props…
npm run demo:all   # both
```

## Run practice files

After you add runnable code or tests at the bottom of a practice file:

```bash
npm run practice:01
npm run practice:02
```

## Type-check (no emit)

```bash
npm run typecheck
```

Uses the same **strict** flags you'd mention in interviews (`strict`, `noImplicitAny`, `strictNullChecks`).

## File map

| # | Demo | Practice | Covers |
|---|------|----------|--------|
| 01 | `01-typescript-core.ts` | `01-typescript-core-practice.ts` | Why TS, interface vs type, optional props, functions, async return, union, unknown/any, never, `as const`, tsconfig |
| 02 | `02-typescript-generics-patterns.ts` | `02-typescript-generics-patterns-practice.ts` | Generics, discriminated unions, narrowing, utility types, API responses, enums, React props, module augmentation |

**Progress:** 18 / 18 — Done

## What's in this folder

| File | Purpose |
|------|---------|
| `package.json` | `tsx` runner + npm scripts |
| `tsconfig.json` | Strict TS config for all `*.ts` here |
| `.gitignore` | Ignores `node_modules/` |
