import http from '../../helpers/http';
import qs from 'querystring';

export default {
   logout: () => ({
      type: 'LOGOUT',
      payload: http(),
   }),
};
