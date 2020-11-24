const initialState = {
   data: [],
   isLoading: false,
   isError: false,
   alertMsg: '',
   success: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'LIST_CHAT_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'LIST_CHAT_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'LIST_CHAT_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            success: action.payload.data.success,
            data: action.payload.data.results,
         };
      }
      default: {
         return state;
      }
   }
};
