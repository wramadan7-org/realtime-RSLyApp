const initialState = {
   data: [],
   success: false,
   isLoading: false,
   isError: false,
   alertMsg: '',
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'SEND_CHAT_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'SEND_CHAT_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'SEND_CHAT_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload.data.results,
            success: action.payload.data.success,
         };
      }
      default: {
         return state;
      }
   }
};
