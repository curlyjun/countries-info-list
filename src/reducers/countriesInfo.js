import produce from 'immer';

export const LOAD_COUNTRIES_INFO_REQUEST = 'LOAD_COUNTRIES_INFO_REQUEST';
export const LOAD_COUNTRIES_INFO_SUCCESS = 'LOAD_COUNTRIES_INFO_SUCCESS';
export const LOAD_COUNTRIES_INFO_FAILURE = 'LOAD_COUNTRIES_INFO_FAILURE';

export const OPEN_ADD_COUNTRY_MODAL = 'OPEN_ADD_COUNTRY_MODAL';
export const CLOSE_ADD_COUNTRY_MODAL = 'CLOSE_ADD_COUNTRY_MODAL';

export const ADD_COUNTRY_REQUEST = 'ADD_COUNTRY_REQUEST';

const initialState = {
  isLoadingCountriesInfo: false,
  isVisibleAddCountryForm: false,
  list: [],
  error: '',
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_COUNTRIES_INFO_REQUEST: {
        draft.isLoadingCountriesInfo = true;
        draft.list = [];
        break;
      }
      case LOAD_COUNTRIES_INFO_SUCCESS: {
        const newData = action.data.map((countryInfo, idx) => {
          countryInfo.key = idx + 1;
          return countryInfo;
        });
        draft.isLoadingCountriesInfo = false;
        draft.list = newData;
        break;
      }
      case LOAD_COUNTRIES_INFO_FAILURE: {
        draft.isLoadingCountriesInfo = false;
        draft.list = [];
        draft.error = action.error;
        break;
      }
      case OPEN_ADD_COUNTRY_MODAL: {
        draft.isVisibleAddCountryForm = true;
        break;
      }
      case CLOSE_ADD_COUNTRY_MODAL: {
        draft.isVisibleAddCountryForm = false;
        break;
      }
      case ADD_COUNTRY_REQUEST: {
        action.data.key = draft.list.length + 1;
        draft.list.unshift(action.data);
        break;
      }
      default: {
        break;
      }
    }
  });
};
