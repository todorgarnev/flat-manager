import React, { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterForm } from "../../common/interfaces/register-form.interface";
import { emailRegEx } from "../../common/constants/form.constant";
import styles from "./Register.module.scss";

interface RegisterProps { }

const Register: FunctionComponent<RegisterProps> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>();
  const onSubmit: SubmitHandler<IRegisterForm> = data => console.log("form >>", data);
  const onError = (errors: any) => console.log(errors);

  return (
    <div className={styles.register}>
      <h1 className={styles.title}>Register</h1>

      <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit, onError)} noValidate>
        <label htmlFor="username">Username</label>
        <input type="text"
          id="username"
          autoComplete="on"
          {...register("username", { required: true })} />
        {errors.username && "Username is required"}

        <label htmlFor="email">Email</label>
        <input type="email"
          id="email"
          autoComplete="on"
          {...register("email", { required: true, pattern: emailRegEx })} />
        {errors.email && errors.email.type === "required" && "Email is required"}
        {errors.email && errors.email.type === "pattern" && "Invalid email"}

        <label htmlFor="password">Password</label>
        <input type="password"
          id="password"
          autoComplete="off"
          {...register("password", { required: true })} />
        {errors.password && "Password is required"}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password"
          autoComplete="off"
          {...register("confirmPassword", { required: true })} />
        {errors.confirmPassword && "Confirm Password is required"}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;