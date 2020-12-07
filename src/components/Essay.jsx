import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import getTextTemplates from '../helpers';

import Button from './Button';
import Header from './Header';

require('./Essay.scss');

const getRandomTemplate = (field) => {
  const madlibsTemplates = getTextTemplates(field);
  const max = madlibsTemplates.length - 1;
  const randomTemplateIndex = Math.floor(Math.random() * max);

  return madlibsTemplates[randomTemplateIndex];
};

const Essay = () => {
  const fieldOrder = useSelector((state) => state.fieldOrder);
  const showButton = useSelector((state) => state.isEssayComplete);

  const essay = fieldOrder.map((field) => (
    <EssayPiece key={field} field={field} />
  ));

  return (
    <div className="essay-container">
      <Header text="Your essay text" />
      <p className="essay-content">
        {essay}
      </p>
      {showButton && <Button handleClick={() => null}>Edit</Button>}
    </div>
  );
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
