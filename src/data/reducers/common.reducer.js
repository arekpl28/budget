import {
  ALL_CATEGORIES_GET_REQUEST,
  ALL_CATEGORIES_GET_SUCCESS,
  ALL_CATEGORIES_GET_FAILURE,
  LOADING_STATES,
} from "data/constants";
const initialState = {
  loadingState: {},
  allCategories: {},
};

function common(state = initialState, action) {
  const newLoadingState = { ...state.loadingState };
  switch (action.type) {
    case ALL_CATEGORIES_GET_REQUEST:
      return {
        ...state,
        loaloadingState: {
          ...state.loadingState,
          [action.type]: LOADING_STATES.LOADING,
        },
      };
    case ALL_CATEGORIES_GET_SUCCESS:
      delete newLoadingState.ALL_CATEGORIES_GET_REQUEST;
      return {
        ...state,
        allCategories: action.payload,
        loaloadingState: newLoadingState,
      };
    case ALL_CATEGORIES_GET_FAILURE:
      delete newLoadingState.ALL_CATEGORIES_GET_REQUEST;
      return {
        ...state,
        allCategories: {},
        loaloadingState: newLoadingState,
      };

    default:
      return state;
  }
}

export default common;
