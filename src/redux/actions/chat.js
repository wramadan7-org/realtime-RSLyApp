import http from '../../helpers/http';
import qs from 'querystring';

export default {
   listChat: (token) => ({
      type: 'LIST_CHAT',
      payload: http(token).get('/chats/list'),
   }),
   chatDetail: (token, data) => ({
      type: 'DETAIL_CHAT',
      payload: http(token).get(`/chats/personal/${data}`),
   }),
   sendChat: (token, param, data) => ({
      type: 'SEND_CHAT',
      payload: http(token).post(`/chats/${param}`, qs.stringify(data)),
   }),
};
