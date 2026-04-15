import React, { useMemo, useRef } from 'react';
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

const ExpandIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const CollapseIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const TrashIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
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
  fullScreenPrompt,
  onFullScreenToggle,
  maxChars,
  fullScreenLabel,
}) => {
  const jsonValid = useMemo(
    () => (jsonMode ? isValidJson(value) : null),
    [jsonMode, value],
  );

  const jsonWrapperRef = useRef(null);

  return (
  <div className={`relative ${fullScreenPrompt ? 'flex-1 flex flex-col mt-8 min-h-0' : ''}`}>
    {labelName && srOnly && (
      <label htmlFor={name} className="sr-only">
        {labelName}
      </label>
    )}
    {((labelName && !srOnly) || isSurpriseMe) && (
      <div className={`flex items-center gap-2 ${fullScreenPrompt || fullScreenLabel ? 'absolute -top-8 left-0' : 'mb-2'}`}>
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
      <div className={`relative ${fullScreenPrompt ? 'flex-1 flex flex-col min-h-0' : 'overflow-hidden'}`}>
        {jsonMode ? (
          <div
            className={`rounded-lg border border-white/30 bg-[#1e1e1e] json-editor-wrapper ${fullScreenPrompt ? 'flex-1' : ''}`}
            ref={jsonWrapperRef}
            style={fullScreenPrompt ? { height: 'auto', maxHeight: 'none', minHeight: 0 } : { height: '125px', maxHeight: '125px' }}
          >
            <Editor
              value={value}
              onValueChange={(code) => {
                handleChange({ target: { name, value: code } });
                requestAnimationFrame(() => {
                  if (jsonWrapperRef.current) {
                    jsonWrapperRef.current.scrollTop = jsonWrapperRef.current.scrollHeight;
                  }
                });
              }}
              highlight={highlightJson}
              padding={12}
              placeholder='{ "scene": "describe your image..." }'
              textareaClassName="json-editor-textarea"
              style={{ minHeight: '100%' }}
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
            className={`bg-white/70 backdrop-blur-md border border-white/30 text-[#10131f] placeholder:text-gray-600 text-base rounded-lg focus:ring-[#10131f] focus:border-[#10131f] outline-none block w-full p-3 pr-[3.25rem] resize-none overflow-y-auto prompt-textarea ${fullScreenPrompt ? 'flex-1' : ''}`}
            style={fullScreenPrompt ? undefined : { height: '125px', maxHeight: '125px' }}
          />
        )}
        <div className="absolute top-0 right-3 z-10 flex flex-col justify-evenly h-[125px]">
          {onJsonModeToggle && (
            <button
              type="button"
              onClick={onJsonModeToggle}
              disabled={disabled}
              title={jsonMode ? 'Switch to text prompt' : 'Switch to JSON prompt'}
              className={`p-1.5 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                jsonMode
                  ? 'bg-white text-[#10131f] hover:bg-white/80'
                  : 'bg-[#10131f] text-white hover:bg-[#10131f]/80'
              }`}
            >
              <CodeToggleIcon />
            </button>
          )}
          {onFullScreenToggle && (
            <button
              type="button"
              onClick={onFullScreenToggle}
              disabled={disabled}
              title={fullScreenPrompt ? 'Exit full screen' : 'Full screen'}
              className={`p-1.5 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                jsonMode
                  ? 'bg-white text-[#10131f] hover:bg-white/80'
                  : 'bg-[#10131f] text-white hover:bg-[#10131f]/80'
              }`}
            >
              {fullScreenPrompt ? <CollapseIcon /> : <ExpandIcon />}
            </button>
          )}
          {onFullScreenToggle && (
            <button
              type="button"
              onClick={() => handleChange({ target: { name, value: '' } })}
              disabled={disabled || !value}
              title="Clear prompt"
              className={`p-1.5 rounded-md transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                jsonMode
                  ? 'bg-white text-[#10131f] hover:bg-white/80'
                  : 'bg-[#10131f] text-white hover:bg-[#10131f]/80'
              }`}
            >
              <TrashIcon />
            </button>
          )}
        </div>
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