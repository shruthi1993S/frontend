import { createSlice } from '@reduxjs/toolkit';
import { getLeaves, addLeave, updateLeave, deleteLeave, getLeavesByUser } from './leaveActions';

const leaveSlice = createSlice({
  name: 'leaves',
  initialState: {
    leaves: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeaves.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLeaves.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.leaves = action.payload;
      })
      .addCase(getLeaves.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getLeavesByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLeavesByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.leaves = action.payload;
      })
      .addCase(getLeavesByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addLeave.fulfilled, (state, action) => {
        state.leaves.push(action.payload);
      })
      .addCase(updateLeave.fulfilled, (state, action) => {
        const index = state.leaves.findIndex((leave) => leave._id === action.payload.id);
        state.leaves[index] = action.payload;
      })
      .addCase(deleteLeave.fulfilled, (state, action) => {
        state.leaves = state.leaves.filter((leave) => leave._id !== action.payload);
      });
  },
});

export default leaveSlice.reducer;
