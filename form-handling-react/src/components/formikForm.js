import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = async (values, { resetForm, setSubmitting, setStatus }) => {
    setStatus("");

    try {
      // Mock API request (simulates registration)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("Registration submitted successfully ✅");
      resetForm();
    } catch (err) {
      setStatus("Something went wrong. Please try again ❌");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="form">
            <label>
              Username
              <Field name="username" placeholder="Enter username" />
              <ErrorMessage name="username" component="p" className="error-text" />
            </label>

            <label>
              Email
              <Field name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="p" className="error-text" />
            </label>

            <label>
              Password
              <Field name="password" type="password" placeholder="Enter password" />
              <ErrorMessage name="password" component="p" className="error-text" />
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && <p className="status-text">{status}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
