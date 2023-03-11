import React from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginApi } from "../../../api/user";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks";
import "./LoginForm.scss";

export const LoginForm = () => {
  //utilizamo el useAuth para que retorne
  //datos del contexto
  const { login } = useAuth();

  function initialValues() {
    return {
      email: "",
      password: "",
    };
  }

  function validationSchema() {
    return {
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true),
    };
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        //extraemos el token
        const { access } = response;
        //mandamos el token a la funcion login
        login(access)
      } catch (error) {
        toast.error(error.message);
      }
    },
  });

  return (
    <Form
      className="login-form-admin"
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <Form.Input
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        autoComplete="off"
        error={formik.errors.email}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        autoComplete="off"
        error={formik.errors.password}
      />
      <Button type="submit" content="Iniciar sesion" primary fluid />
    </Form>
  );
};
