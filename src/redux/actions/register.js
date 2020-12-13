import http from '../../helpers/http';
import qs from 'querystring';

export default {
  register: (data) => ({
    type: 'REGISTER',
    payload: http().post('/register', qs.stringify(data)),
  }),
};
