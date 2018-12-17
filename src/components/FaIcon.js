import React, { PropTypes } from "react";

const FaIcon = ({ isV2Icon, name }) => (
  <i className={`fa${isV2Icon ? "s" : ""} fa-${name}`} aria-hidden="true" />
);

FaIcon.propTypes = {
  isV2Icon: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

FaIcon.defaultProps = {
  isV2Icon: false
};

export default FaIcon;
