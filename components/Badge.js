import React from "react";
import PropTypes from "prop-types";
import "../components/Badge.css";
import Badge from "../components/assets/Badge.png";

export const TagBadge = ({ type, prefix, label, style, ...props }) => {
  return (
    <button className={`badge--${type}`} style={style} {...props}>
      {prefix && <img src={Badge} style={{ filter: "inverter()" }} />}
      {label}
    </button>
  );
};

TagBadge.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  prefix: PropTypes.bool,
};

export default TagBadge;
