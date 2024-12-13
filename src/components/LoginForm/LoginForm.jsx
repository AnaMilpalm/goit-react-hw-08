import { Field, Form, Formik } from "formik";

import css from "./LoginForm.module.css";
const LoginForm = () => {
  return (
    <div className={css.wrapper}>
      <h2>Login</h2>
      <Formik>
        <Form className={css.form}>
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
