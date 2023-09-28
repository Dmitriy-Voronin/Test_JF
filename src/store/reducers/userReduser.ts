import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import axios from 'axios';
import { IUser } from './usersReducer';


export interface IUserInfo {
  user: IUser | null,
  status: string,
  error: string
  currentId: number | null
}

const initialState: IUserInfo = {
  user: null,
  status: '',
  error: '',
  currentId: null
};

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async function (id: number, thunkAPI) {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователz")
    }

  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDefualtUser: (state) => {
      state.user = null;
    },
    setCurrentId: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    }
  },
  extraReducers: {
    [fetchUserInfo.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [fetchUserInfo.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.status = 'resovled';
      state.user = action.payload;
    },
    [fetchUserInfo.rejected.type]: (state, action: PayloadAction<string>) => {
      state.status = 'rejected';
      state.error = action.payload
    }
  }
})

export const user = (state: RootState) => state.user;

export default userSlice.reducer
