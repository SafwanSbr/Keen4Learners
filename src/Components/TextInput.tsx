import React from 'react';

type Props = {
  icon: string;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<Props> = ({ icon, label, ...rest }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-2">
          {label}
        </label>
      )}
      <div className="relative flex items-center border border-border rounded-lg shadow-soft bg-background-surface transition-all duration-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 hover:border-border-dark">
        <span className="px-4 py-3 text-text-secondary flex items-center material-icons-outlined text-lg">
          {icon}
        </span>
        <input 
          className="flex-1 px-3 py-3 border-0 outline-none bg-transparent text-text-primary placeholder:text-text-muted focus:outline-none text-sm" 
          {...rest} 
        />
      </div>
    </div>
  );
};

export default TextInput;
