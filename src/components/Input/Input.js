import React from "react";
import PropTypes from "prop-types";
function Input({
  type = "text",
  borderRadius = 2,
  color = "black",
  placeholder = "Enter text",
  bg = "white",
  padding = 2,
}) {
  const style = {
    borderRadius: borderRadius + "px",
    outline: "none",
    borderColor: color,
    backgroundColor: bg,
    padding: padding + "px",
  };

  return (
    <div>
      <input type={type} placeholder={placeholder} style={style} />
    </div>
  );
}
Input.propTypes = {
  type: PropTypes.oneOf([
    "text",
    "number",
    "date",
    "password",
    "time",
    "range",
  ]),
  borderRadius: PropTypes.number,
  placeholder: PropTypes.string,
  padding: PropTypes.number,
  color: PropTypes.string,
  bg: PropTypes.string,
};
export default Input;
