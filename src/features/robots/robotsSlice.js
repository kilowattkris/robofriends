import userAPI from "../../api/userApi";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRobots = createAsyncThunk(
  "robots/fetchRobots",
  // async(thunkAPI) => {
  //   const response = await fetch(usersAPI);
  //   console.log(response);
  //   return response.json();
  // }
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
    // pending: (state) => {
    //   state.isPending = true;
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // success: (state, action) => {
    //   state.robots = action.payload;
    //   state.isPending = false;
    // },
    // failed: (state, action) => {
    //   state.error = action.payload;
    // },
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