# How do you handle forms in React?

**Target time:** 45 seconds

---

## Talk track

> **Controlled inputs** + validation before submit. For simple forms: `useState` per field or one object state.
>
> For complex forms (multi-step, many fields): **React Hook Form** or Formik — less re-render churn, built-in validation hooks.
>
> **Pattern:** client validation for UX → submit → API → show server errors on fields → optimistic or refetch with React Query on success.
>
> Atlys visa flows: multi-step wizard, controlled fields, schema validation, disable submit while pending.

---

## Code

```tsx
function LoginForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return setError("Invalid email");
    await api.login({ email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && <p role="alert">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Avoid

- Uncontrolled forms when you need inline validation messages
