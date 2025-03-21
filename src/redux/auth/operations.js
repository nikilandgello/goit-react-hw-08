import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

export const api = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('users/signup', body);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.code === 11000) {
        toast.error(
          'Email is already registered. Please try a different address!'
        );
      } else {
        toast.error(
          'An error occurred during registration. Please try again later.'
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await api.post('users/login', body);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('users/logout');
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auht/refresh',
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      if (savedToken == '') {
        return thunkAPI.rejectWithValue('Token is not exist');
      }
      setAuthHeader(savedToken);

      const { data } = await api.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
