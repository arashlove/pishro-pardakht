import { Link, useHistory } from "react-router-dom";
import { Input, Form, Text, Btn } from "../../../components";

export default function LoginForm({ setPage = () => {} }) {
  const history = useHistory();
  return (
    <Form className="LoginForm bg-white row px-5 py-4 rounded-10 gap-3">
      <h4 className="h4 text-center text-violet fw-bold">
        <Text value="landing.login.login-form.title" />
      </h4>
      <Input label="landing.login.login-form.inputs.0.label" />
      <Input label="landing.login.login-form.inputs.1.label" />
      <Link to="/forget-password" className="text-start btn-link text-dark">
        ‌<Text value="landing.login.login-form.forget-password" />
      </Link>
      <div>
        <Btn
          className="w-100"
          label="landing.login.login-form.login"
          onClick={() => history.push("/dashboard")}
        />
      </div>
      <p className="mb-0 mt-3 text-center">
        <Text value="landing.login.login-form.not-have-account" />
        <span
          className="me-3 text-decoration-underline cursor-pointer"
          onClick={() => setPage("register")}
        >
          <Text value="landing.login.login-form.register" />
        </span>
      </p>
    </Form>
  );
}
