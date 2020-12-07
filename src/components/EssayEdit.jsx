import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { START_OVER } from '../madlibs';

import Button from './Button';
import Header from './Header';

require('./EssayEdit.scss');

const EssayEdit = ({ updateEditMode }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: START_OVER });
    updateEditMode(false);
  };

  const initialEssayText = useSelector((state) => state.completedEssayText);
  const [essayText, updateEssayText] = useState(initialEssayText);

  return (
    <div className="essay-edit-container">
      <div className="essay-edit-inner-content">
        <Header text="Your essay Text" />
        <textarea className="essay-edit-textarea" onChange={(event) => updateEssayText(event.target.value)} value={essayText} />
        <Button handleClick={handleClick}>Start Over</Button>
      </div>
    </div>
  );
};

EssayEdit.propTypes = {
  updateEditMode: PropTypes.func.isRequired,
};

export default EssayEdit;
