import axios from "axios";

import { Inputs } from "../types";

export const apiRegistration = (data: Inputs) => {
  const { name, email, password, passwordConfirm } = data;
  const fetchData = axios.post("http://localhost:8000/api/registration", {
    name: name,
    email: email,
    password: password,
    passwordConfirm: passwordConfirm,
  });
  return fetchData;
};
