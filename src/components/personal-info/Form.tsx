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
      <span className="flex items-center justify-between">
        <h2 className="text-sm text-[#022959]">{title}</h2>
        {error && <p className="text-sm font-bold text-[#EE374A]">{error}</p>}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${error ? "border-[#EE374A]" : "border-[#D6D9E6]"} h-10 rounded border px-4 outline-none placeholder:text-[1rem] placeholder:text-[#9699AA]${error ? "border-[]" : ""}`}
      />
    </div>
  );
};

export default Form;
