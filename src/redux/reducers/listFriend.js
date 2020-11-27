const initialState = {
   data: [],
   success: false,
   isLoading: false,
   isError: false,
   alertMsg: '',
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'ALL_FRIEND_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'ALL_FRIEND_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'ALL_FRIEND_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            success: action.payload.data.success,
            data: action.payload.data.results,
            alertMsg: action.payload.data.message,
         };
      }
      default: {
         return state;
      }
   }
};
