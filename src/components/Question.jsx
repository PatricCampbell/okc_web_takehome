import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { SUBMIT_FIELD } from '../madlibs';

require('./Question.scss');

const Question = ({ field, question }) => {
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();

  const onBlur = () => {
    dispatch({ type: SUBMIT_FIELD, payload: { field, answer } });
  };

  return (
    <div className="question-container">
      <label htmlFor={field}>
        <p>{question}</p>
        <input
          className="question-input"
          name={field}
          onBlur={onBlur}
          onChange={(event) => setAnswer(event.target.value)}
          type="text"
          value={answer}
        />
      </label>
    </div>
  );
};

Question.propTypes = {
  field: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

export default Question;
