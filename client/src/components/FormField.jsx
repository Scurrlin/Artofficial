import React, { useMemo } from 'react';
import Editor from 'react-simple-code-editor';

function isValidJson(str) {
  const trimmed = str.trim();
  if (!trimmed) return null;
  try {
    const parsed = JSON.parse(trimmed);
    return typeof parsed === 'object' && parsed !== null;
  } catch {
    return false;
  }
}

function highlightJson(code) {
  let html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return html.replace(
    /("(?:[^"\\]|\\.)*")(\s*:)?|(\b(?:true|false|null)\b)|(-?\d+\.?\d*(?:[eE][+-]?\d+)?)/g,
    (match, str, colon, bool, num) => {
      if (str) {
        if (colon) return `<span style="color:#9cdcfe">${str}</span>${colon}`;
        return `<span style="color:#ce9178">${str}</span>`;
      }
      if (bool) return `<span style="color:#569cd6">${bool}</span>`;
      if (num) return `<span style="color:#b5cea8">${num}</span>`;
      return match;
    },
  );
}

const CodeToggleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

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
  disabled,
  srOnly,
  jsonMode,
  onJsonModeToggle,
  maxChars,
}) => {
  const jsonValid = useMemo(
    () => (jsonMode ? isValidJson(value) : null),
    [jsonMode, value],
  );

  return (
  <div>
    {labelName && srOnly && (
      <label htmlFor={name} className="sr-only">
        {labelName}
      </label>
    )}
    {((labelName && !srOnly) || isSurpriseMe) && (
      <div className="flex items-center gap-2 mb-2">
        {labelName && !srOnly && (
          <label
            htmlFor={name}
            className="block text-base font-medium text-[#10131f]"
          >
            {labelName}
          </label>
        )}
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            disabled={disabled}
            className="font-semibold text-xs bg-[#10131f] py-1 px-2 rounded-[5px] text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Surprise me
          </button>
        )}
        {jsonMode && jsonValid !== null && (
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold py-1 px-2 rounded-[5px] bg-[#10131f] select-none"
            style={{ color: jsonValid ? '#6dadeb' : '#e06b6b' }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: jsonValid ? '#6dadeb' : '#e06b6b' }}
            />
            {jsonValid ? 'Valid JSON' : 'Invalid JSON'}
          </span>
        )}
        {maxChars && value.length >= 1900 && (
          <span
            className="inline-flex items-center text-xs font-semibold py-1 px-2 rounded-[5px] bg-[#10131f] select-none tabular-nums"
            style={{ color: value.length >= maxChars ? '#e06b6b' : '#6dadeb' }}
          >
            {value.length}/{maxChars}
          </span>
        )}
      </div>
    )}
    {isTextarea ? (
      <div className="relative">
        {jsonMode ? (
          <div className="rounded-lg border border-white/30 bg-[#1e1e1e] json-editor-wrapper">
            <Editor
              value={value}
              onValueChange={(code) =>
                handleChange({ target: { name, value: code } })
              }
              highlight={highlightJson}
              padding={12}
              placeholder='{ "scene": "describe your image..." }'
              textareaClassName="json-editor-textarea"
              style={{ minHeight: 'calc(100% - 24px)' }}
            />
          </div>
        ) : (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            rows={2}
            className="bg-white/70 backdrop-blur-md border border-white/30 text-[#10131f] placeholder:text-gray-600 text-base rounded-lg focus:ring-[#10131f] focus:border-[#10131f] outline-none block w-full p-3 pr-[3.25rem] resize-none overflow-y-auto prompt-textarea"
          />
        )}
        {onJsonModeToggle && (
          <button
            type="button"
            onClick={onJsonModeToggle}
            disabled={disabled}
            title={jsonMode ? 'Switch to text prompt' : 'Switch to JSON prompt'}
            className={`absolute top-2 right-3 z-10 p-1.5 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
              jsonMode
                ? 'bg-white text-[#10131f] hover:bg-white/80'
                : 'bg-[#10131f] text-white hover:bg-[#10131f]/80'
            }`}
          >
            <CodeToggleIcon />
          </button>
        )}
      </div>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-white/70 backdrop-blur-md border border-white/30 text-[#10131f] placeholder:text-gray-600 text-base rounded-lg focus:ring-[#10131f] focus:border-[#10131f] outline-none block w-full p-3"
      />
    )}
  </div>
  );
};

export default FormField;