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
   allFriend: () => ({
      type: 'ALL_FRIEND',
      payload: http().get('/user'),
   }),
   updateProfile: (token, data) => ({
      type: 'UPDATE_PROFILE',
      payload: http(token).patch('/user/profile/update', qs.stringify(data)),
   }),
   updatePhotoProfile: (token, data) => ({
      type: 'UPDATE_PHOTO',
      payload: http(token).patch('/user/profile/update', data),
   }),
};
