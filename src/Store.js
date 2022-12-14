import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import nameReducer from './features/nameSlice'
import userReducer from './features/User/userSlice'

export default configureStore({
  reducer: {
    counter : counterReducer,
    name: nameReducer,
    user: userReducer
  },
});
