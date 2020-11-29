const initialState = {
   isLogin: false,
   isError: false,
   isLoading: false,
   alertMsg: '',
   token: '',
};

export default (state = initialState, action) => {
   switch (action.type) {
      case 'LOGIN_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'LOGIN_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            isLogin: false,
            alertMsg: 'Rejected',
         };
      }
      case 'LOGIN_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            isLogin: action.payload.data.success,
            token: action.payload.data.token,
         };
      }
      case 'LOGOUT_PENDING': {
         return {
            ...state,
            isLoading: true,
         };
      }
      case 'LOGOUT_REJECTED': {
         return {
            ...state,
            isLoading: false,
            isError: true,
            isLogin: false,
            alertMsg: 'Rejected',
         };
      }
      case 'LOGOUT_FULFILLED': {
         return {
            ...state,
            isLoading: false,
            isError: false,
            isLogin: false,
            token: '',
         };
      }
      default: {
         return state;
      }
   }
};
