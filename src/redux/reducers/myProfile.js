const initialState = {
   data: [],
   isLoading: false,
   isError: false,
   alertMsg: '',
   success: false,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'MY_PROFILE_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'MY_PROFILE_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'MY_PROFILE_FULFILLED': {
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
