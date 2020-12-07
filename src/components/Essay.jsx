import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import getTextTemplates from '../helpers';
import { SUBMIT_ESSAY } from '../madlibs';

import Button from './Button';
import Header from './Header';

require('./Essay.scss');

const getRandomTemplate = (field) => {
  const madlibsTemplates = getTextTemplates(field);
  const max = madlibsTemplates.length - 1;
  const randomTemplateIndex = Math.floor(Math.random() * max);

  return madlibsTemplates[randomTemplateIndex];
};

const Essay = ({ updateEditMode }) => {
  const dispatch = useDispatch();

  const fieldOrder = useSelector((state) => state.fieldOrder);
  const showButton = useSelector((state) => state.isEssayComplete);

  const handleClick = () => {
    const essay = document.querySelector('.essay-content').innerText;

    updateEditMode(true);
    dispatch({ type: SUBMIT_ESSAY, payload: { essay } });
  };

  const essay = fieldOrder.map((field) => (
    <EssayPiece key={field} field={field} />
  ));

  return (
    <div className="essay-container">
      <Header text="Your essay text" />
      <p className="essay-content">
        {essay}
      </p>
      {showButton && <Button handleClick={handleClick}>Edit</Button>}
    </div>
  );
};

Essay.propTypes = {
  updateEditMode: PropTypes.func.isRequired,
};

const EssayPiece = ({ field }) => {
  const answer = useSelector((state) => (
    state.fieldAnswers[field]
  ));

  const madlib = getRandomTemplate(field);
  const madlibSections = madlib.split('$answer');
  const startingSection = madlibSections[0];
  const endingSection = madlibSections[1];

  return answer ? <span>{startingSection}<b>{answer}</b>{endingSection} </span> : null;
};

EssayPiece.propTypes = {
  field: PropTypes.string.isRequired,
};

export default Essay;
