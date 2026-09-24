import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Register.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful!");
  };

  return (
    <main className="register-page">
      <section className="register-card">
        <div className="register-intro">
          <p className="register-eyebrow">CREATE YOUR ACCOUNT</p>
          <h1>Join ShopKart.</h1>
          <p>Set up your account to continue shopping.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="register-form-group">
            <label htmlFor="username">Full name</label>
            <input
              type="text"
              id="username"
              placeholder="Your name"
              autoComplete="name"
              {...register("username", { required: "Name is required" })}
            />
            {errors.username && <span className="register-error">{errors.username.message}</span>}
          </div>

          <div className="register-form-group">
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
            {errors.email && <span className="register-error">{errors.email.message}</span>}
          </div>

          <div className="register-form-group">
            <label htmlFor="password">Password</label>
            <div className="register-password-field">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="At least 6 characters"
                autoComplete="new-password"
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
                className="register-password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <span className="register-error">{errors.password.message}</span>}
          </div>

          <button className="register-submit" type="submit">Create account</button>
        </form>

        <p className="register-login-prompt">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}