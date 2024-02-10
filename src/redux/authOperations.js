import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const headerToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (cred) => {
  try {
    const { data } = await axios.post("/users/signup", cred);
    headerToken.set(data.token);
    return data;
  } catch (error) {
    toast.error("Something went wrong!");
  }
});

const login = createAsyncThunk("auth/login", async (cred) => {
  try {
    const { data } = await axios.post("/users/login", cred);
    headerToken.set(data.token);
    return data;
  } catch (error) {
    toast.error("Something went wrong!");
  }
});

const logout = createAsyncThunk("auth/logout", async (cred) => {
  try {
    await axios.post("/users/logout", cred);
    headerToken.unset();
  } catch (error) {
    toast.error("Something went wrong!");
  }
});

const refreshCurrent = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) return thunkApi.rejectWithValue();

  headerToken.set(persistedToken);

  try {
    const { data } = await axios.post("/users/current");
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});

const authOperations = {
  register,
  login,
  logout,
  refreshCurrent,
};

export default authOperations;
