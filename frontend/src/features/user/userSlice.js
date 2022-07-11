import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {
    postText: "",
  },
  posts: [],
  userPost: {
    text: "",
    image: "",
  },
  friends: [],

  users: [],
};

export const getPosts = createAsyncThunk(
  "user/getPosts",
  async (token, thunkAPI) => {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://motion.team1.propulsion-learn.ch/backend/api/social/posts/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return resp.data
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (token, thunkAPI) => {
    try {
      const resp = await axios({
        method: "GET",
        url: "https://motion.propulsion-home.ch/backend/api/users/?limit=20&offset=450",
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2MTU4Mzc2LCJqdGkiOiJiOGY5MjJlMDJkNGQ0MDU3YTYxNzI3ZjgzOWJjNjM3YyIsInVzZXJfaWQiOjE2MzB9.0OMBFanThG0ZTpbXPf5iRVe80vlFTzpa2F009Q2Oclo`,
        },
      });
      return resp.data.results;
    } catch (error) {
      //console.log(error);
    }
  }
);

export const sharePost = createAsyncThunk(
  "user/sharePost",
  async (data, thunkAPI) => {
    const { text, token, image } = data;
    console.log(token);
    try {
      const resp = await axios({
        method: "POST",
        url: "https://motion.propulsion-home.ch/backend/api/social/posts/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          content: text,
          image: image,
        },
      });
      return resp.data.results;
    } catch (error) {
      //console.log(error);
    }
  }
);

export const friendRequest = createAsyncThunk(
  "user/friendRequest",
  async (id, thunkAPI) => {
    try {
      const resp = await axios({
        method: "POST",
        url: `https://motion.propulsion-home.ch/backend/api/social/friends/request/${id}/`,
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU2MTU4Mzc2LCJqdGkiOiJiOGY5MjJlMDJkNGQ0MDU3YTYxNzI3ZjgzOWJjNjM3YyIsInVzZXJfaWQiOjE2MzB9.0OMBFanThG0ZTpbXPf5iRVe80vlFTzpa2F009Q2Oclo",
        },
      });
      console.log(resp.data);
      return resp.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handlePostInput: (state, { payload }) => {
      state.userPost.text = payload;
    },
    handleImageUpload: (state, { payload }) => {
      state.userPost.image = payload;
    },
    handleGetUsers: (state, { payload }) => {
      state.users = [...state.users, ...payload];
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      console.log(payload)
    },
    [sharePost.fulfilled]: (state, payload) => {
      state.userPost.text = "";
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
  },
});

export const { handlePostInput, handleImageUpload, handleGetUsers } =
  userSlice.actions;

export default userSlice.reducer;
