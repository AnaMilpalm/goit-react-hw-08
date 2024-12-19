import { Field, Form, Formik } from "formik";

import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";

import { login } from "../../redux/auth/operations";
import { LuCircleArrowRight } from "react-icons/lu";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(login(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={css.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={css.form}>
          <Field className={css.field} name="email" placeholder="Enter email" />
          <Field
            className={css.field}
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <div className={css.buttonBox}>
            <button className={css.button} type="submit">
              <span>Submit</span>
              <LuCircleArrowRight size="20" className={css.icon} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
