import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
  email: string;
}

interface userState {
  user: User | null;
}

const initialState: userState = {
  user: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    saveUser(state, action: PayloadAction<User | null>) {
      state.user = action.payload;
    },

    userLogout(state) {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
