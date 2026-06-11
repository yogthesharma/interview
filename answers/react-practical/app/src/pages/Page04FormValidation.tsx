import { useState } from "react";
import { ExerciseLayout } from "../components/ExerciseLayout";

type Errors = { email?: string; password?: string };

export default function Page04FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  function validateFields(emailVal: string, passwordVal: string): Errors {
    const next: Errors = {};
    if (!emailVal.trim()) next.email = "Email is required";
    else if (!emailVal.includes("@")) next.email = "Enter a valid email";
    if (!passwordVal) next.password = "Password is required";
    else if (passwordVal.length < 6) next.password = "Min 6 characters";
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const next = validateFields(email, password);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSuccess(true);
    }
  }

  return (
    <ExerciseLayout
      id="04"
      title="Form with validation"
      goal="Validate on submit; show inline errors."
      checklist={[
        "Email required + format check",
        "Password min length 6",
        "Errors clear when user fixes field",
        "Successful submit shows message",
      ]}
    >
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "0.75rem" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => {
              const v = e.target.value;
              setEmail(v);
              if (submitted) setErrors(validateFields(v, password));
            }}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => {
              const v = e.target.value;
              setPassword(v);
              if (submitted) setErrors(validateFields(email, v));
            }}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Login</button>
      </form>
      {success && <p style={{ marginTop: "1rem", color: "#2e7d32" }}>Submitted successfully!</p>}
    </ExerciseLayout>
  );
}
