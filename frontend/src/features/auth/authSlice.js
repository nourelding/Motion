import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  values: {
    email: "",
    username: "",
    code: "",
    password: "",
    passwordRepeat: "",
    firstName: "",
    lastName: "",
  },
  token: undefined,
  status: undefined,
  error: false,
  verificationError: false,
  errorMessage: "",
};

// sign-up user for the first time, and he will receive a code
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (email, thunkAPI) => {
    try {
      const resp = await axios({
        method: "POST",
        url: "https://motion.team1.propulsion-learn.ch/backend/api/registration/",
        data: {
          email: email,
        },
      });
      return thunkAPI.fulfillWithValue({
        status: resp.status
      });
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data.email[0],
      });
    }
  }
);

export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (input, thunkAPI) => {
    try {
      const {
        code,
        email,
        firstName,
        lastName,
        password,
        passwordRepeat,
        username,
      } = input;
      const resp = await axios({
        method: "PATCH",
        url: "https://motion.propulsion-home.ch/backend/api/auth/registration/validation/",
        data: {
          email: email,
          username: username,
          code: code,
          password: password,
          password_repeat: passwordRepeat,
          first_name: firstName,
          last_name: lastName,
        },
      });
      thunkAPI.fulfillWithValue(resp.status);
      return resp.status;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.message,
      });
    }
  }
);

export const signinUser = createAsyncThunk(
  "auth/signInUser",
  async (input, thunkAPI) => {
    try {
      const { email, password } = input;
      const resp = await axios({
        method: "POST",
        url: "https://motion.team1.propulsion-learn.ch/backend/api/auth/token/",
        data: {
          email: email,
          password: password,
        },
      });
      return thunkAPI.fulfillWithValue({
        status: resp.status,
        token: resp.data.access,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue({
        status: error.response.status,
        message: error.response.data,
      });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleSignUpInput: (state, { payload }) => {
      state.values = { ...state.values, email: payload };
    },
    handleVerificationInput: (state, { payload }) => {
      const { inputName, value } = payload;
      state.values = { ...state.values, [inputName]: value };
    },
    handleSignInInput: (state, { payload }) => {
      const { inputName, value } = payload;
      state.values = { ...state.values, [inputName]: value };
    },
    handleTokenStorage: (state, { payload }) => {
      if (
        localStorage.getItem("token") === null ||
        localStorage.getItem("token") === undefined
      ) {
        localStorage.setItem("token", JSON.stringify(payload));
      } else {
        state.token = JSON.parse(localStorage.getItem("token"));
      }
    },
  },
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.error = false;
      state.verificationError = true;
      state.status = payload.status;
      state.errorMessage = "";
    },
    [signupUser.rejected]: (state, { payload }) => {
      const { message, status } = payload;
      state.error = true;
      state.status = status;
      state.errorMessage = message;
    },
    [verifyUser.fulfilled]: (state, { payload }) => {
      state.error = false;
      state.verificationError = false;
      state.status = payload;
      state.errorMessage = "";
      state.values.username = "";
      state.values.password = "";
    },
    [verifyUser.rejected]: (state, { payload }) => {
      const { message, status } = payload;
      state.verificationError = true;
      state.status = status;
      state.errorMessage = message;
    },
    [signinUser.fulfilled]: (state, { payload }) => {
      const { status, token } = payload;
      state.error = false;
      state.verificationError = false;
      state.token = token;
      state.status = status;
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    [signinUser.rejected]: (state, { payload }) => {
      const { message, status } = payload;
      state.error = true;
      state.status = status;
      state.errorMessage = message;
    },
  },
});

export const {
  handleSignUpInput,
  handleVerificationInput,
  handleSignInInput,
  handleTokenStorage,
} = authSlice.actions;

export default authSlice.reducer;
