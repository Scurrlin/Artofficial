import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  isTextarea,
}) => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-base font-medium text-gray-900"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
        >
          Surprise me
        </button>
      )}
    </div>
    {isTextarea ? (
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        rows={2}
        className="bg-white/80 border border-black/10 text-gray-900 text-base rounded-lg focus:ring-[#10131f] focus:border-[#10131f] outline-none block w-full p-3 resize-none overflow-y-auto prompt-textarea"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-white/80 border border-black/10 text-gray-900 text-base rounded-lg focus:ring-[#10131f] focus:border-[#10131f] outline-none block w-full p-3"
      />
    )}
  </div>
);

export default FormField;