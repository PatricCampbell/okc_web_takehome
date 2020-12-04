import React from 'react';
import Header from './Header';

require('./Essay.scss');

const Essay = () => (
  <div className="essay-container">
    <Header text="Your essay text" />
  </div>
);

export default Essay;
