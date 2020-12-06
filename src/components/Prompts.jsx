import React from 'react';
import { useSelector } from 'react-redux';

import { COPY } from '../constants';

import Header from './Header';
import Question from './Question';

require('./Prompts.scss');

const Prompts = () => {
  const fields = useSelector((state) => state.fieldOrder);

  const fieldsList = fields.map((field) => (
    <Question
      key={field}
      field={field}
      question={COPY[field]}
    />
  ));

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
