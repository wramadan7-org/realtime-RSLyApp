const initialState = {
   data: [],
   isLoadig: false,
   isError: false,
   success: false,
   alertMsg: '',
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'FRIEND_PROFILE_PENDING': {
         return {
            ...state,
            isLoadig: true,
         };
      }
      case 'FRIEND_PROFILE_REJECTED': {
         return {
            ...state,
            isLoadig: false,
            isError: true,
            alertMsg: 'Rejected',
         };
      }
      case 'FRIEND_PROFILE_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            success: action.payload.data.success,
            alertMsg: action.payload.data.message,
            data: action.payload.data.results,
         };
      }
      default: {
         return state;
      }
   }
};
