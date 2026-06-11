# Error boundaries — what are they?

**Target time:** 30 seconds

---

## Talk track

> **Error boundaries** are class components (or libraries) implementing **`getDerivedStateFromError` / `componentDidCatch`** — they catch **render errors in children**, log them, and show fallback UI instead of white-screening the whole app.
>
> They **don't** catch: event handler errors, async errors, SSR-only issues — those need try/catch.
>
> Use at route or feature level: `ApplicationWizardBoundary` catches broken step, rest of app works.

---

## Code

```tsx
class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
```

---

## Avoid

- Expecting boundaries to catch `onClick` throws — wrap handler in try/catch
