import React from 'react';
import PropTypes from 'prop-types';

require('./App.scss');

const App = ({ counter, increment }) => (
  <div className="match-area">
    Counter (to make sure redux works): {counter}
    <br />
    <br />
    <button onClick={increment}>
      Increment
    </button>
  </div>
);

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default App;
