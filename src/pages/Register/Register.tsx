import React, { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterForm } from "../../common/interfaces/register-form.interface";
import styles from "./Register.module.scss";

interface RegisterProps { }

const Register: FunctionComponent<RegisterProps> = () => {
  const { register, handleSubmit, formState } = useForm<IRegisterForm>();
  const onSubmit: SubmitHandler<IRegisterForm> = data => {
    console.log("form >>", data);
    console.log("form state >>", formState);
  };

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>

      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text"
          id="username"
          autoComplete="on"
          {...register("username", { required: true })} />

        <label htmlFor="email">Email</label>
        <input type="email"
          id="email"
          autoComplete="on"
          {...register("email", { required: true })} />

        <label htmlFor="password">Password</label>
        <input type="password"
          id="password"
          autoComplete="off"
          {...register("password", { required: true })} />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password"
          autoComplete="off"
          {...register("confirmPassword", { required: true })} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;