import React from "react";

const InputField = ({ label, placeholder, type, refer, focus }) => {
  return (
    <div className="flex flex-col gap-3 ">
      <label
        className="text[#403F3F] font-semibold text-lg md:text-xl"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        ref={refer}
        onFocus={focus}
        required
        className="outline-none rounded-md bg-[#F3F3F3] p-4"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputField;
