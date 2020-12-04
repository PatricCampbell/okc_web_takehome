import React from 'react';
import { useSelector } from 'react-redux';

import { COPY } from '../constants';

import Header from './Header';
import Question from './Question';

require('./Prompts.scss');

const Prompts = () => {
  const fields = useSelector((state) => state.fieldOrder);
  const fieldAnswers = useSelector((state) => state.fieldAnswers);

  const fieldsList = fields.map((field) => {
    const answer = fieldAnswers[field] || '';

    return (
      <Question
        key={COPY[field]}
        answer={answer}
        onChange={() => null}
        question={COPY[field]}
      />
    );
  });

  return (
    <div className="prompt-container">
      <Header text="About Me" />
      <div>
        {fieldsList}
      </div>
    </div>
  );
};


export default Prompts;
