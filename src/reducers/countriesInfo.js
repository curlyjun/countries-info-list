import produce from 'immer';

export const LOAD_COUNTRIES_INFO_REQUEST = 'LOAD_COUNTRIES_INFO_REQUEST';
export const LOAD_COUNTRIES_INFO_SUCCESS = 'LOAD_COUNTRIES_INFO_SUCCESS';
export const LOAD_COUNTRIES_INFO_FAILURE = 'LOAD_COUNTRIES_INFO_FAILURE';

export const OPEN_ADD_COUNTRY_MODAL = 'OPEN_ADD_COUNTRY_MODAL';
export const CLOSE_ADD_COUNTRY_MODAL = 'CLOSE_ADD_COUNTRY_MODAL';

export const ADD_COUNTRY_REQUEST = 'ADD_COUNTRY_REQUEST';

export const DELETE_COUNTRY_REQUEST = 'DELETE_COUNTRY_REQUEST';

export const INTEGRATED_SEARCH_REQUEST = 'INTEGRATED_SEARCH_REQUEST';

export const SORT_BY_COLUMN = 'SORT_BY_COLUMN';

export const LOAD_MORE_ITEMS = 'LOAD_MORE_ITEMS';

const initialState = {
  isLoadingCountriesInfo: false,
  isVisibleAddCountryForm: false,
  loadItems: [],
  list: [],
  sort: 0, // 0 : ascending, 1 : descending
  sortBy: 'name',
  error: '',
  loadSize: 30,
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_COUNTRIES_INFO_REQUEST: {
        draft.isLoadingCountriesInfo = true;
        draft.list = [];
        draft.loadItems = [];
        break;
      }
      case LOAD_COUNTRIES_INFO_SUCCESS: {
        const newData = action.data.map((countryInfo, idx) => {
          countryInfo.key = idx + 1;
          return countryInfo;
        });
        draft.isLoadingCountriesInfo = false;
        draft.list = newData.slice(draft.loadItems.length, 30);
        draft.loadItems = newData;
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
        draft.loadItems.unshift(action.data);
        break;
      }
      case DELETE_COUNTRY_REQUEST: {
        draft.list = draft.list.filter(item => item.key !== action.data);
        draft.loadItems = draft.loadItems.filter(item => item.key !== action.data);
        break;
      }
      case INTEGRATED_SEARCH_REQUEST: {
        const reg = new RegExp(action.data, 'ig');
        draft.list = draft.loadItems.filter(item => {
          return (
            reg.test(item.name) ||
            reg.test(item.alpha2Code) ||
            reg.test(item.region) ||
            reg.test(item.capital) ||
            reg.test(item.callingCodes)
          );
        });
        break;
      }
      case SORT_BY_COLUMN: {
        //처음엔 이름으로 오름차순 되어있음
        //같으면 한 번 이상 누른 것
        if (draft.sortBy === action.data) {
          draft.sort = !draft.sort;

          draft.sort //descending
            ? draft.loadItems.sort((a, b) => {
                if (a[draft.sortBy] > b[draft.sortBy]) {
                  return -1;
                }
                if (a[draft.sortBy] < b[draft.sortBy]) {
                  return 1;
                }

                return 0;
              })
            : //ascending
              draft.loadItems.sort((a, b) => {
                if (a[draft.sortBy] < b[draft.sortBy]) {
                  return -1;
                }
                if (a[draft.sortBy] > b[draft.sortBy]) {
                  return 1;
                }

                return 0;
              });
        } else {
          draft.sortBy = action.data;
          draft.sort = 0;

          draft.loadItems.sort((a, b) => {
            if (a[draft.sortBy] < b[draft.sortBy]) {
              return -1;
            }
            if (a[draft.sortBy] > b[draft.sortBy]) {
              return 1;
            }

            return 0;
          });
        }
        draft.list = draft.loadItems.slice(0, draft.loadSize);
        break;
      }
      case LOAD_MORE_ITEMS: {
        draft.list = draft.list.concat(draft.loadItems.slice(draft.list.length, draft.list.length + draft.loadSize));
        break;
      }
      default: {
        break;
      }
    }
  });
};
