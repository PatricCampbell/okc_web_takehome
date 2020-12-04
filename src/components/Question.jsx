import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ answer, onChange, question }) => (
  <>
    <p>{question}</p>
    <input onChange={onChange} type="text" value={answer} />
  </>
);

Question.defaultProps = {
  answer: '',
};

Question.propTypes = {
  answer: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
};

export default Question;
