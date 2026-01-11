import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="form-wrapper">
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          alert("Formik Form Submitted ✅");
          resetForm();
        }}
      >
        <Form className="form">
          <label>
            Username
            <Field name="username" />
            <ErrorMessage name="username" component="p" className="error-text" />
          </label>

          <label>
            Email
            <Field name="email" />
            <ErrorMessage name="email" component="p" className="error-text" />
          </label>

          <label>
            Password
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" className="error-text" />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
