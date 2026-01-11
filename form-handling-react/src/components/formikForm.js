import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
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
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert("Registration successful ✅ (Formik Form)");
          resetForm();
        }}
      >
        <Form className="form">
          <label>
            Username
            <Field name="username" placeholder="Enter username" />
            <ErrorMessage name="username" component="p" className="error-text" />
          </label>

          <label>
            Email
            <Field name="email" type="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="p" className="error-text" />
          </label>

          <label>
            Password
            <Field
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="p" className="error-text" />
          </label>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
