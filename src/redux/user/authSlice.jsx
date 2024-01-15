import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  success: false,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.data = action.payload;
      state.success = true;
    },
    logout: (state) => {
      state.data = {};
      state.success = false;
    },
  },
});

export const { userLoggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
