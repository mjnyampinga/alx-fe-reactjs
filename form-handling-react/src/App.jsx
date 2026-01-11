import "./index.css";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

export default function App() {
  return (
    <div className="page">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
