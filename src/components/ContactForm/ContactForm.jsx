import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too shot!")
    .max(50, "Too long!")
    .required("Required!"),
  usertel: Yup.string()
    .min(7, "Too Short!")
    .max(7, "Too long!")
    .required("Required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.usertel,
    };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        usertel: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field className={s.field} type="text" name="username" />
          <ErrorMessage name="username" component="span" className={s.error} />
        </label>
        <label className={s.label}>
          Number
          <Field className={s.field} type="tel" name="usertel" />
          <ErrorMessage name="usertel" component="span" className={s.error} />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
