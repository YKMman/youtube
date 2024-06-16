import { useForm, SubmitHandler } from "react-hook-form";

import * as classes from "./registration.module.scss";

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />

      <input {...register("email", { required: true })} />

      <input {...register("password", { required: true })} />

      <input {...register("passwordRepeat", { required: true })} />

      <button type="submit" value="Зарегистрироваться" />
    </form>
  );
};

export default Registration;
