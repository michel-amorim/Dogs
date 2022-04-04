import React from "react";

import "../Input/style.css";

const Input = ({ label, type, name, value, onChange }) => {
  return (
    <div className="wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="input"
        type={type}
        value={value}
        onChange={onChange}
      />
      <p className="erro">Erro</p>
    </div>
  );
};

export default Input;
