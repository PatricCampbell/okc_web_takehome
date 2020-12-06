import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { SUBMIT_FIELD, UPDATE_FIELD_ANSWER } from '../madlibs';

require('./Question.scss');

const Question = ({ field, question }) => {
  const dispatch = useDispatch();
  const fieldAnswers = useSelector((state) => state.fieldAnswers);

  const onBlur = () => {
    dispatch({ type: SUBMIT_FIELD, payload: field });
  };

  const onChange = (event) => {
    const payload = {
      update: {
        answer: event.target.value,
        field,
      },
    };

    dispatch({ type: UPDATE_FIELD_ANSWER, payload });
  };

  return (
    <div className="question-container">
      <label htmlFor={field}>
        <p>{question}</p>
        <input
          className="question-input"
          name={field}
          onBlur={onBlur}
          onChange={onChange}
          type="text"
          value={fieldAnswers[field]}
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
