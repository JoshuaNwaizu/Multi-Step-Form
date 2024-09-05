import React from "react";

interface Form {
  title?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: any) => void;
  value?: string | number;
  error?: string;
}

const Form: React.FC<Form> = ({
  title,
  placeholder,
  onChange,
  type,
  value,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xs text-[#022959]">{title}</h2>
      {error && <p>{error}</p>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="h-10 rounded border border-[#D6D9E6] px-4 outline-none placeholder:text-[#9699AA]"
      />
    </div>
  );
};

export default Form;
