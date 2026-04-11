import React from 'react';
import { IMAGE_MODELS } from '../constants';

const GENERATABLE_MODELS = IMAGE_MODELS.filter((m) => m.generatable !== false);

const ModelSelector = ({ selectedModel, onChange, disabled }) => {
  const activeModel = GENERATABLE_MODELS.find((m) => m.id === selectedModel) || GENERATABLE_MODELS[0];

  return (
    <div className="flex gap-3 items-stretch">
      {activeModel && (
        <div className="rounded-xl bg-[#10131f] p-5 text-white flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <img src={activeModel.iconLogo} alt="" className="w-8 h-8" />
            <h3 className="text-lg font-bold">{activeModel.label}</h3>
          </div>
          <p className="text-sm text-white/80">
            <span className="font-semibold text-white">Best for:</span> {activeModel.bestFor}
          </p>
          <ul className="mt-2 space-y-0.5">
            {activeModel.strengths.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-white/80">
                <span className="text-[#6dadeb]">&#10003;</span> {s}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-white/80">
            <span className="font-semibold text-white">Tip:</span> {activeModel.promptTip}
          </p>
        </div>
      )}

      <div className="flex flex-col justify-between self-stretch">
        {GENERATABLE_MODELS.map((model) => {
          const isSelected = model.id === selectedModel;
          return (
            <button
              key={model.id}
              type="button"
              disabled={disabled}
              onClick={() => onChange(model.id)}
              className={`w-14 h-14 flex items-center justify-center rounded-md transition-all border cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed
                ${isSelected
                  ? 'bg-[#10131f] border-[#10131f]'
                  : 'bg-white/70 backdrop-blur-md border-[#10131f]/30 hover:border-[#10131f]/60'
                }`}
              title={model.label}
            >
              <img
                src={model.iconLogo}
                alt={model.label}
                className="w-7 h-7"
                style={isSelected ? undefined : { filter: 'brightness(0)' }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ModelSelector;
