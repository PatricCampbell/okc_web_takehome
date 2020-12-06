import {
  FIELD_NAMES,
} from './constants';


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const UPDATE_FIELD_ANSWER = 'MADLIBS.UPDATE_FIELD_ANSWER';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  essayText: '',
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const { field } = action.payload;

      return { ...state, essayText: `new text in ${field}` };
    }

    case UPDATE_FIELD_ANSWER: {
      const { answer, field } = action.payload.update;
      const { fieldAnswers } = state;

      fieldAnswers[field] = answer;

      return { ...state, fieldAnswers };
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export function submitField({ field }) {
  return { type: SUBMIT_FIELD, payload: { field } };
}

export function updateFieldAnswer({ answer, field }) {
  return { type: UPDATE_FIELD_ANSWER, payload: { update: answer, field } };
}
