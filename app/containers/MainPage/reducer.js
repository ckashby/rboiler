/* MainPage reducer */
import produce from 'immer';
import { LOAD_EVENTS } from './constants';

export const initialState = {
  featuredEvents: [],
  events: [],
};

/* eslint-disable default-case, no-param-reassign */
const mainPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOAD_EVENTS:
        break;
    }
  });

export default mainPageReducer;
