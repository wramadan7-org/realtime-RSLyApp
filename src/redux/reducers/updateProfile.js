const initialState = {
   data: [],
   isLoading: false,
   isError: false,
   success: false,
   alertMsg: '',
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'UPDATE_PROFILE_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'UPDATE_PROFILE_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'UPDATE_PROFILE_FULFILLED': {
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
