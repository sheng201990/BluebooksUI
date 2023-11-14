import React from "react";
import PropTypes from "prop-types";
import "../components/Button.css";
import Add from "../components/assets/Add.png";
export const Button = ({
  type,
  label,
  style,
  onClick,
  disable,
  size,
  prefix,
  suffix,
  ...props
}) => {
  return (
    <button
      type="button"
      className={
        disable
          ? `button--${type}--disable--${size}`
          : `button--${type}--${size}`
      }
      style={style}
      onClick={onClick}
      disabled={disable}
      {...props}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ fontSize: "16px", paddingRight: "6px" }}>
          {prefix && "+"}
        </div>
        <div>{label} </div>
        <div style={{ fontSize: "16px", paddingLeft: "6px" }}>
          {" "}
          {suffix && "+"}
        </div>
      </div>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.bool,
  suffix: PropTypes.bool,
};

export default Button;
