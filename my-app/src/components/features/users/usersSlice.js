import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
};


export const showUser = createAsyncThunk(
  'showUser',
  async (args, { rejectWithValue }) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    try {
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(showUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
