import { loadEvents } from '../actions';
import { LOAD_EVENTS } from '../constants';

describe('MainPage actions', () => {
  describe('loadEvents Action', () => {
    it('has a type of LOAD_EVENTS', () => {
      const expected = {
        type: LOAD_EVENTS,
      };
      expect(loadEvents()).toEqual(expected);
    });
  });
});
