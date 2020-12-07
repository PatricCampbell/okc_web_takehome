import {
  FIELD_NAMES,
} from './constants';


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const CHECK_FOR_COMPLETE = 'MADLIBS.CHECK_FOR_COMPLETE';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  isEssayComplete: false,
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],
  fieldAnswers: {
    [FIELD_NAMES.hometown]: null,
    [FIELD_NAMES.favoriteFood]: null,
    [FIELD_NAMES.loveToDo]: null,
    [FIELD_NAMES.music]: null,
    [FIELD_NAMES.messageIf]: null,
    [FIELD_NAMES.bar]: null,
  },
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SUBMIT_FIELD: {
      const fieldAnswers = { ...state.fieldAnswers };
      const { answer, field } = action.payload;

      if (answer === '') {
        fieldAnswers[field] = null;
      } else {
        fieldAnswers[field] = answer;
      }

      return { ...state, fieldAnswers };
    }

    case CHECK_FOR_COMPLETE: {
      const totalPrompts = state.fieldOrder.length;
      const totalFilled = Object.values(state.fieldAnswers).filter((answer) => answer).length;

      if (totalPrompts === totalFilled) {
        return { ...state, isEssayComplete: true };
      }

      return { ...state, isEssayComplete: false };
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export function submitField({ field }) {
  return { type: SUBMIT_FIELD, payload: { update: field } };
}

export function checkForComplete() {
  return { type: CHECK_FOR_COMPLETE };
}
