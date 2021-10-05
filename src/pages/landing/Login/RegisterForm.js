import React, { useState } from "react";
import { Input, Form, Text, Btn } from "../../../components";

export default function RegisterForm({ setPage = () => {} }) {
  const [step, setStep] = useState(0);
  return (
    <Form className="RegisterForm bg-white row px-5 py-4 rounded-10 gap-3">
      <h4 className="h4 text-center text-violet fw-bold">
        <Text value="landing.login.register-form.title" />
      </h4>
      {step === 0 && (
        <Input label="landing.login.register-form.inputs.0.label" />
      )}
      {step === 1 && (
        <React.Fragment>
          <Input label="landing.login.register-form.inputs.1.label" />
          <Input label="landing.login.register-form.inputs.2.label" />
          <Input label="landing.login.register-form.inputs.3.label" />
          <Input label="landing.login.register-form.inputs.4.label" />
        </React.Fragment>
      )}
      <div>
        {step === 0 && (
          <Btn
            className="w-100"
            label="landing.login.register-form.send-sms"
            onClick={() => setStep(1)}
          />
        )}
        {step === 1 && (
          <Btn className="w-100" label="landing.login.register-form.register" />
        )}
      </div>
      <p className="mb-0 mt-3 text-center">
        <Text value="landing.login.register-form.have-account" />
        <span
          className="me-3 text-decoration-underline cursor-pointer"
          onClick={() => setPage("login")}
        >
          <Text value="landing.login.register-form.login" />
        </span>
      </p>
    </Form>
  );
}
