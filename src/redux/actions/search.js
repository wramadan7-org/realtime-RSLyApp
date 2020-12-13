import http from '../../helpers/http';
import qs from 'querystring';

export default {
  search: (token, data) => ({
    type: 'SEARCH',
    payload: http(token).get(`/user?search=${data}`),
  }),
  clearSearch: (token) => ({
    type: 'CLEAR_SEARCH',
  }),
};
