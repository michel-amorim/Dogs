import React from "react";

import "../Input/style.css";

const Input = ({ label, type, name }) => {
  return (
    <div className="wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input id={name} name={name} className="input" type={type} />
      <p className="erro">Erro</p>
    </div>
  );
};

export default Input;
