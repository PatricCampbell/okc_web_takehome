import React from 'react';

import Essay from './Essay';
import Prompts from './Prompts';

require('./App.scss');

const App = () => (
  <div className="content-container">
    <Prompts />
    <Essay />
  </div>
);

export default App;
