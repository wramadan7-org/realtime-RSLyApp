const initialState = {
   data: [],
   isLoading: false,
   isError: false,
   success: false,
   alertMsg: '',
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'DETAIL_CHAT_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'DETAIL_CHAT_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'DETAIL_CHAT_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.results,
            success: action.payload.data.success,
            alertMsg: action.payload.data.message,
         };
      }
      default: {
         return state;
      }
   }
};
