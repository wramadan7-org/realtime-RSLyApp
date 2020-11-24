import http from '../../helpers/http';
import qs from 'querystring';

export default {
   myProfile: (token) => ({
      type: 'MY_PROFILE',
      payload: http(token).get('/user/profile'),
   }),
   friendProfile: (token,param) => ({
      type: 'FRIEND_PROFILE',
      payload: http(token).get(`/user/${param}`),
   }),
   updateProfile: (token, data) => ({
      type: 'UPDATE_PROFILE',
      payload: http(token).patch('/user/profile/update', qs.stringify(data)),
   }),
};
