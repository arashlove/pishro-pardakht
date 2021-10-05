// import { useState } from "react";
import { Text } from "..";
import "./index.scss";
export default function Input({
  label = "",
  key = "",
  value = null,
  onInput = () => {},
  //   rules = [],
}) {
  const showValue = value ?? "";
  //   const [message, setMessage] = useState(null);
  const handleChange = ({ target }) => {
    onInput(String(target.value));
  };
  return (
    <div className="Input w-100">
      <label className="text-dark fw-bold mb-1 me-2">
        <Text value={label} />
      </label>
      <div
        className="input-box row transition rounded-4 border px-3 border-light-gray"
        style={{ "--bs-gutter-x": "0" }}
      >
        <input
          name={key}
          value={showValue}
          onInput={handleChange}
          //   rules={rules}
        />
      </div>
      {/* <p
        className="message w-100 mb-0 text-danger"
        style={{ visibility: message ? "visible" : "hidden" }}
      >
        {message ?? "error"}
      </p> */}
    </div>
  );
}
