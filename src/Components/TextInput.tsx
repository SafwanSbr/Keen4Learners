import React from 'react';

type Props = {
  icon: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<Props> = ({ icon, ...rest }) => {
  return (
    <div className="input-group mb-3">
      <span className="input-group-text material-icons-outlined">{icon}</span>
      <input className="form-control" {...rest} />
    </div>
  );
};

export default TextInput;
