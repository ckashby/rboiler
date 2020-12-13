/* MainPage actions */

import {
  LOAD_EVENTS,
  LOAD_EVENTS_SUCCESS,
  LOAD_EVENTS_FAILURE,
  // LOAD_FEATURED_EVENTS,
  // LOAD_FEATURED_EVENTS_SUCCESS,
  // LOAD_FEATURED_EVENTS_FAILURE,
} from './constants';

export function loadEvents(searchTerm) {
  return {
    type: LOAD_EVENTS,
    searchTerm,
  };
}

export function loadEventsSuccess(events = []) {
  return {
    type: LOAD_EVENTS_SUCCESS,
    events,
  };
}

export function loadEventsError(error) {
  return {
    type: LOAD_EVENTS_FAILURE,
    error,
  };
}
