import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-md mx-auto p-4 space-y-4 border rounded shadow">
        <div>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>
        <div>
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>
        <div>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
