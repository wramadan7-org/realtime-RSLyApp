import {combineReducers} from 'redux';

import register from './register';
import login from './login';
import listChat from './listChat';
import detailChat from './detailChat';
import sendChat from './sendChat';
import myProfile from './myProfile';
import profileFriend from './profileFriend';
import updateProfile from './updateProfile';
import updatePhotoProfile from './updatePhotoProfile';
import listFriend from './listFriend';
import search from './search';

export default combineReducers({
  register,
  login,
  listChat,
  detailChat,
  sendChat,
  myProfile,
  profileFriend,
  updateProfile,
  listFriend,
  updatePhotoProfile,
  search,
});
