import { useForm, SubmitHandler } from "react-hook-form";

import * as classes from "./registrationForm.module.scss";

import { Inputs } from "./types";
import { apiRegistration } from "./api";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    fetch("http://localhost:8000/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(body => console.log(body))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <input {...register("name", { required: true })} placeholder="name" />

      <input {...register("email", { required: true })} placeholder="email" />

      <input
        {...register("password", { required: true })}
        placeholder="password"
      />

      <input
        {...register("passwordConfirm", { required: true })}
        placeholder="password Confirm"
      />

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
