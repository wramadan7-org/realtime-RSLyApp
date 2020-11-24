import http from '../../helpers/http';
import qs from 'querystring';

export default {
   login: (data) => ({
      type: 'LOGIN',
      payload: http().post('/login', qs.stringify(data)),
   }),
};
