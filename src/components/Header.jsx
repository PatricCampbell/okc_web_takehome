import React from 'react';
import PropTypes from 'prop-types';

require('./Header.scss');

const Header = ({ text }) => (
  <h2 className="section-header">{text}</h2>
);

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
