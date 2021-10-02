import React from "react";
import PropTypes from "prop-types";
function Button({
  label = "Button",
  bg = "red",
  color = "white",
  size = "medium",
  borderRadius = 0,
}) {
  let scale = 1;
  if (size == "small") scale = 0.5;
  if (size == "medium") scale = 0.8;
  const style = {
    backgroundColor: bg,
    color: color,
    padding: `${scale * 1}rem ${scale * 1.6}rem`,
    outline: "none",
    border: "none",
    cursor: "pointer",
    borderRadius: borderRadius,
    fontSize: "16px",
  };

  return (
    <div>
      <button style={style}>{label} </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "big"]),
  borderRadius: PropTypes.number,
};

export default Button;
