import { useForm } from "react-hook-form";
import "./Register.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful!");
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: true })}
          />
          {errors.username && <span className="error">Username is required</span>}
        </div>





{/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && <span className="error">Password is required</span>}
          {errors.password?.type === "minLength" && (
            <span className="error">Password must be at least 6 characters</span>
          )}
        </div>


{/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}