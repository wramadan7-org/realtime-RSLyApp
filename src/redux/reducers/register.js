const initialState = {
   isError: false,
   isLoading: false,
   alertMsg: '',
   data: [],
   success: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'REGISTER_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'REGISTER_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'REGISTER_FULFILLED': {
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
