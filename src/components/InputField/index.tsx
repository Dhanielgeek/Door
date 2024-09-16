import { useState } from "react";

interface InputFieldProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
  value: string;
  id: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = "Enter text.",
  type = "text",
  required = false,
  onChange,
  value,
  id,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const validateInput = (value: string) => {
    if (required && !value) {
      setErrorMsg("This field is required.");
      setIsValid(false);
      return;
    }

    if (type === "password") {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(value)) {
        setErrorMsg(
          "Password must be 8+ characters with 1 uppercase, 1 number, and 1 special character."
        );
        setIsValid(false);
        return;
      }
    }

    // Clear error if validation passes
    setErrorMsg("");
    setIsValid(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validateInput(e.target.value);
  };

  return (
    <div className="input-field-container">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          if (!required) setIsValid(true);
        }}
        onBlur={handleBlur}
        className={`textbox-input ${
          isValid ? "" : "textbox-input-error"
        } border ${
          isValid ? "border-gray-300" : "border-red-500"
        } p-2 rounded w-full`}
      />
      {/* Error message display */}
      {!isValid && <span className="text-red-500 text-sm">{errorMsg}</span>}
    </div>
  );
};

export default InputField;
