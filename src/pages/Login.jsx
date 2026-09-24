import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    alert("Login successful!");
  };

  return (
    <main className="login-page">
      <aside className="login-showcase">
        <span className="login-showcase-mark">SK</span>
        <p className="login-showcase-label">WELCOME TO SHOPKART</p>
        <h1>Everything you need, simply.</h1>
        <p>
          Sign in to continue exploring everyday essentials and thoughtful finds.
        </p>
        <div className="login-showcase-note">
          <span>01</span>
          <strong>Simple shopping for everyday life.</strong>
        </div>
      </aside>

      <section className="login-card">
        <div className="login-intro">
          <p className="login-eyebrow">WELCOME BACK</p>
          <h1>Good to see you again.</h1>
          <p>Sign in to continue shopping with ShopKart.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login-form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && <span className="login-error">{errors.email.message}</span>}
        </div>

        <div className="login-form-group">
          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((visible) => !visible)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <span className="login-error">{errors.password.message}</span>}
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <button type="button" className="forgot-password">Forgot password?</button>
        </div>

        <button className="login-submit" type="submit">Sign in</button>
        </form>

        <p className="login-register-prompt">
          New to ShopKart? <Link to="/register">Create an account</Link>
        </p>
      </section>
    </main>
  );
}