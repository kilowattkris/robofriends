import userAPI from "../../api/userApi";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRobots = createAsyncThunk(
  "robots/fetchRobots",
  userAPI.fetchUsers
);

const initialState = {
  loading: true,
  robots: [],
  error: null
};

export const robotsSlice = createSlice({
  name: 'robots',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchRobots.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRobots.fulfilled, (state, action) => {
      // Add user to the state array
      state.robots = configUsers(action.payload);
      state.loading = false;
    });
  }
});

const configUsers = users => {
  return users.map(user => createImgSrc(user));
};

const createImgSrc = (user) => {
  user.imgSrc = `https://robohash.org/${user.id}.png`;
  user.imgAlt = user.name;
  return user;
};

// Action creators are generated for each case reducer function
export const { pending, success, failed } = robotsSlice.actions;

export default robotsSlice.reducer;