import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ui = {};
ui.StyledIcon = styled((props) => <i {...props} />)`
  font-size: ${(props) => props.size}px;
  cursor: pointer;
  transition: 0.2s all ease-in;
`;

const Icon = ({ type, size, ...rest }) => (
  <ui.StyledIcon className={type} size={size} {...rest} />
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

Icon.defaultProps = {
  type: "",
};

export default Icon;
