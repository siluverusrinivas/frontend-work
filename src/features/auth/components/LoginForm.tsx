import { useState, type FormEvent } from "react";
import { LoginUser } from "../../../api/auth.api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await LoginUser(formData);
      setMessage(response.message);
      setFormData({ email: "", password: "" });
      navigate("/dashboard");
    } catch (submitError: unknown) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to sign in. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-card" aria-labelledby="login-title">
      <p className="auth-eyebrow">Welcome back</p>
      <h1 id="login-title">Sign in to your account</h1>
      <p className="auth-description">Enter your details to continue.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input
          autoComplete="email"
          id="login-email"
          name="email"
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          required
          type="email"
          value={formData.email}
        />

        <label htmlFor="login-password">Password</label>
        <input
          autoComplete="current-password"
          id="login-password"
          name="password"
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
          required
          type="password"
          value={formData.password}
        />

        {error && (
          <p className="auth-message auth-message--error" role="alert">
            {error}
          </p>
        )}
        {message && (
          <p className="auth-message auth-message--success" role="status">
            {message}
          </p>
        )}

        <button className="auth-submit" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="auth-switch">
        Don&apos;t have an account?{" "}
        <button className="auth-link" onClick={() => navigate("/")} type="button">
          Create one
        </button>
      </p>
    </section>
  );
};

export default LoginForm;