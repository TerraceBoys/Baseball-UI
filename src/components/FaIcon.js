import React, { PropTypes } from "react";

const FaIcon = ({ classNames, isV2Icon, name }) => (
  <i
    className={`fa${isV2Icon ? "s" : ""} fa-${name} ${classNames}`}
    aria-hidden="true"
  />
);

FaIcon.propTypes = {
  classNames: PropTypes.string,
  isV2Icon: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

FaIcon.defaultProps = {
  isV2Icon: false
};

export default FaIcon;
