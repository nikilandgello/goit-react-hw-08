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
  async ({ id, name }, thunkAPI) => {
    try {
      await toast.promise(api.delete(`contacts/${id}`), {
        loading: `Deleting contact "${name}"...`,
        success: `Contact "${name}" deleted successfully!`,
        error: `Failed to delete contact "${name}". Please try again.`,
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
        loading: `Adding contact "${body.name}"...`,
        success: `Contact "${body.name}" added successfully!`,
        error: `Failed to add contact "${body.name}". Please try again.`,
      });
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, ...body }, thunkAPI) => {
    try {
      const contact = await toast.promise(api.patch(`contacts/${id}`, body), {
        loading: `Updating contact "${body.name}"...`,
        success: `Contact "${body.name}" updated successfully!`,
        error: `Failed to update contact "${body.name}". Please try again.`,
      });
      return contact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
