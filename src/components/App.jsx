import React, { useState } from 'react';

import Essay from './Essay';
import EssayEdit from './EssayEdit';
import Prompts from './Prompts';

require('./App.scss');

const App = () => {
  const [isEditing, updateEditMode] = useState(false);

  return isEditing ? <EssayEdit updateEditMode={updateEditMode} /> : (
    <div className="content-container">
      <Prompts />
      <Essay updateEditMode={updateEditMode} />
    </div>
  );
};


export default App;
