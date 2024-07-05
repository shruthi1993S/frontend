import { createSlice } from '@reduxjs/toolkit';
import { getInterviews, addInterview, updateInterview, deleteInterview, getInterviewsByUser } from './interviewActions';

const interviewSlice = createSlice({
  name: 'interviews',
  initialState: {
    interviews: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInterviews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInterviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.interviews = action.payload;
      })
      .addCase(getInterviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getInterviewsByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getInterviewsByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.interviews = action.payload;
      })
      .addCase(getInterviewsByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addInterview.fulfilled, (state, action) => {
        state.interviews.push(action.payload);
      })
      .addCase(updateInterview.fulfilled, (state, action) => {
        const index = state.interviews.findIndex((interview) => interview._id === action.payload.id);
        state.interviews[index] = action.payload;
      })
      .addCase(deleteInterview.fulfilled, (state, action) => {
        state.interviews = state.interviews.filter((interview) => interview._id !== action.payload);
      });
  },
});

export default interviewSlice.reducer;
