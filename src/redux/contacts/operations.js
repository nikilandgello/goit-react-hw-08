import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://67b710bd2bddacfb270d7fb6.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/users');
      return contacts.data;
    } catch (error) {
      toast.error('Oops... something went wrong');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await toast.promise(axios.delete(`/users/${id}`), {
        loading: 'Deleting contact...',
        success: 'Contact deleted successfully!',
        error: 'Oops... something went wrong',
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const contact = await toast.promise(axios.post('/users', body), {
        loading: 'Adding contact...',
        success: `${body.firstname} added successfully!`,
        error: 'Oops... something went wrong',
      });
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (body, thunkAPI) => {
    try {
      const contact = await toast.promise(
        axios.put(`/users/${body.id}`, body),
        {
          loading: 'Updating contact...',
          success: `${body.firstname} updated successfully`,
          error: 'Oops... something went wrong',
        }
      );
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
