const initialState = {
  dataSearch: [],
  isLoading: false,
  isError: false,
  alertMsg: '',
  success: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SEARCH_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Rejected',
      };
    }
    case 'SEARCH_FULFILLED': {
      return {
        ...state,
        isError: false,
        alertMsg: action.payload.data.message,
        dataSearch: action.payload.data.results,
        success: action.payload.data.success,
      };
    }
    case 'CLEAR_SEARCH': {
      return {
        ...state,
        dataSearch: [],
        isLoading: false,
        isError: false,
        alertMsg: '',
        success: false,
      };
    }
    default: {
      return state;
    }
  }
};
