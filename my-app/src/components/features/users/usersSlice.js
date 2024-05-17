import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const addUser = createAsyncThunk(
  "addUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


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


export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { method: "DELETE" }
    );

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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        const existingUserIndex = state.users.findIndex(user => user.id === action.payload.id);
        if (existingUserIndex !== -1) {
          state.users[existingUserIndex] = action.payload;
        } else {
          state.users.push(action.payload);
        }
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
    
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

      builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) =>
          ele.id === action.payload.id ? action.payload : ele
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

      builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((ele) => ele.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});


export default usersSlice.reducer;
