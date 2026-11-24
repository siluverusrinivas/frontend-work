import { useState, type FormEvent } from "react";
import { RegisterUser } from "../../../api/auth.api";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
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
      const response = await RegisterUser(formData);
      setMessage(response.message);
      setFormData({ name: "", email: "", password: "" });
      navigate("/login");
    } catch (submitError: unknown) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to create your account. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="auth-card" aria-labelledby="register-title">
      <p className="auth-eyebrow">Get started</p>
      <h1 id="register-title">Create your account</h1>
      <p className="auth-description">Sign up to get started.</p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label htmlFor="register-name">Name</label>
        <input
          autoComplete="name"
          id="register-name"
          name="name"
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          required
          type="text"
          value={formData.name}
        />

        <label htmlFor="register-email">Email</label>
        <input
          autoComplete="email"
          id="register-email"
          name="email"
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          required
          type="email"
          value={formData.email}
        />

        <label htmlFor="register-password">Password</label>
        <input
          autoComplete="new-password"
          id="register-password"
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
          {isSubmitting ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p className="auth-switch">
        Already have an account?{" "}
        <button className="auth-link" onClick={() => navigate("/login")} type="button">
          Sign in
        </button>
      </p>
    </section>
  );
};

export default RegisterForm;
