import { createSlice } from "@reduxjs/toolkit";
// import { registerUser } from "./userActions";

const initialState = {
  loading: false,
  userInfo: null, // for user object
  //userToken: null, // for storing the JWT
  RegSuccess: false, // for monitoring the registration process.
  LoginSuccess: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login:(state,action)=> {
        state.userInfo = action.payload
        state.LoginSuccess= true
    },

    register:(state)=> {
        state.RegSuccess = true
    }
  },
})

export const {login, register} = userSlice.actions

export default userSlice.reducer;
