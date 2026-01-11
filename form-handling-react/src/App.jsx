import "./index.css";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div className="page">
      <h1 className="title">User Registration</h1>

      {/* Step 2: Controlled Form */}
      <RegistrationForm />

      {/* Step 3: Formik + Yup Form */}
      <FormikForm />
    </div>
  );
}
