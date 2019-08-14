import produce from 'immer';

export const LOAD_COUNTRIES_INFO_REQUEST = 'LOAD_COUNTRIES_INFO_REQUEST';
export const LOAD_COUNTRIES_INFO_SUCCESS = 'LOAD_COUNTRIES_INFO_SUCCESS';
export const LOAD_COUNTRIES_INFO_FAILURE = 'LOAD_COUNTRIES_INFO_FAILURE';

const initialState = [];

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_COUNTRIES_INFO_REQUEST: {
        draft = [];
        break;
      }
      case LOAD_COUNTRIES_INFO_SUCCESS: {
        draft = action.data;
        break;
      }
      case LOAD_COUNTRIES_INFO_FAILURE: {
        draft = [];
        break;
      }
      default: {
        break;
      }
    }
  });
};
