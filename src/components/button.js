import React, { PropTypes } from 'react';

const Button = (props) => (
  <button>{props.name}</button>
);

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
