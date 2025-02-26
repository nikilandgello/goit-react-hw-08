import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { api } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await api.get('contacts');
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
      await toast.promise(api.delete(`contacts/${id}`), {
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
      const contact = await toast.promise(api.post('contacts', body), {
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
        api.put(`contacts/${body.id}`, body),
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
