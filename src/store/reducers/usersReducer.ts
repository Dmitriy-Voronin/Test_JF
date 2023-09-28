import { AsyncThunk, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios, { AxiosResponse } from 'axios';


export interface IUser {
  id: number,
  email: string,
  username: string,
  phone: string,
}

export interface IUsers {
  users: IUser[],
  status: string,
  error: string
}


// Define the initial state using that type
const initialState: IUsers = {
  users: [],
  status: '',
  error: ''
};

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async function (_, thunkAPI) {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
    }

  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.status = 'resovled';
      state.users = action.payload;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload
    }
  }
})

export const users = (state: RootState) => state.users

export default usersSlice.reducer
