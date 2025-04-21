import React from "react";
function Button({ label, onClick }) {
  return (
    <button onClick={onclick} data-testid="custom-button">
      {label}
    </button>
  );
}

export default Button;
