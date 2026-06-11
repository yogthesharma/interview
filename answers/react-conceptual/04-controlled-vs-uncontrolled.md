# Controlled vs uncontrolled components?

**Target time:** 30 seconds

---

## Talk track

> **Controlled:** React state is the **source of truth** for the input value — `value` + `onChange`. You validate, transform, and reset from state.
>
> **Uncontrolled:** The DOM holds the value — use a **ref** to read it (e.g. on submit). Less boilerplate, harder to validate live.
>
> **Default for product forms:** controlled — especially with TypeScript and libraries like React Hook Form (which can register refs but still centralize validation). Atlys visa forms were controlled for step validation and error display.

---

## Code

```tsx
// Controlled
const [email, setEmail] = useState("");
<input value={email} onChange={(e) => setEmail(e.target.value)} />;

// Uncontrolled
const ref = useRef<HTMLInputElement>(null);
<input ref={ref} defaultValue="" />;
// on submit: ref.current?.value
```

---

## Avoid

- Mixing `value` without `onChange` (React warning — read-only field)
