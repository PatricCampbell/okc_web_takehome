import React from 'react';

import PropTypes from 'prop-types';

require('./Button.scss');

const Button = ({ children, handleClick }) => (
  <button className="button" onClick={handleClick}>{children}</button>
);

Button.defaultProps = {
  children: 'Default',
};

Button.propTypes = {
  children: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
