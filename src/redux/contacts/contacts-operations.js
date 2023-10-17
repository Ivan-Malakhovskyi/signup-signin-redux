import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const serviceContacts = createAsyncThunk(
  'contacts/serviceAll ',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeValueFilter = createAsyncThunk(
  'filter/changeValueFilter',
  async (task, thunkAPI) => {
    try {
      const { data } = await axios.patch(`contacts/${task.id}`);
      return data;
    } catch (error) {
      thunkAPI.fulfillWithValue(error.message);
    }
  }
);
