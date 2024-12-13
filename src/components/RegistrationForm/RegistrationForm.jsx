import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
const RegistrationForm = () => {
  return (
    <div className={css.wrapper}>
      <h2>Register</h2>
      <Formik>
        <Form className={css.form}>
          <Field name="name" placeholder="Enter name" />
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
