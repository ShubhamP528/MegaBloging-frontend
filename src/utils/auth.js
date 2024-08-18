import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NODE_API_ENDPOINT } from "./utils";

export const retrieveBlogAuth = createAsyncThunk(
  "auth/retrieveAuth",
  async () => {
    const storedAuth = localStorage.getItem("BlogUser");
    console.log(storedAuth);
    if (storedAuth) {
      const parsedUser = JSON.parse(storedAuth);
      // if (parsedUser.expiresAt < new Date().valueOf()) return null;
      const props = await fetch(`${NODE_API_ENDPOINT}/api/v1/getUser`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${parsedUser.token}`,
        },
      });
      const parsedProps = await props.json();
      console.log(parsedProps.data);
      return {
        user: parsedUser,
      };
    } else return null;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      const userData = state.user;
      // Serialize userData to a JSON string before storing in localStorage
      localStorage.setItem("BlogUser", JSON.stringify(userData));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("BlogUser");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveBlogAuth.fulfilled, (state, action) => {
      if (action.payload && action.payload.user) {
        state.user = action.payload.user;
      }
    });
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
