import React, { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterForm } from "../../common/interfaces/register-form.interface";
import { emailRegEx } from "../../common/constants/form.constant";
import styles from "./Register.module.scss";

interface RegisterProps { }

const Register: FunctionComponent<RegisterProps> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>();
  const onSubmit: SubmitHandler<IRegisterForm> = data => console.log("form >>", data);

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>

      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.inputsWrapper}>
          <div className="inputContainer">
            <label className="label" htmlFor="username">Username</label>

            <input className="input"
              type="text"
              id="username"
              autoComplete="on"
              {...register("username", { required: true })} />

            <span className="input-error">{errors.username && "Username is required"}</span>
          </div>

          <div className="inputContainer">
            <label className="label" htmlFor="email">Email</label>

            <input className="input"
              type="email"
              id="email"
              autoComplete="on"
              {...register("email", { required: true, pattern: emailRegEx })} />

            <span className="input-error">
              {errors.email && errors.email.type === "required" && "Email is required"}
            </span>
            <span className="input-error">
              {errors.email && errors.email.type === "pattern" && "Invalid email"}
            </span>
          </div>

          <div className="inputContainer">
            <label className="label" htmlFor="password">Password</label>

            <input className="input"
              type="password"
              id="password"
              autoComplete="off"
              {...register("password", { required: true, minLength: 3 })} />

            <span className="input-error">
              {errors.password && "Password is required"}
            </span>
          </div>
        </div>

        <button className="button" type="submit">Register</button>
      </form>
    </div >
  );
};

export default Register;