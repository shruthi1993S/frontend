import { createSlice } from '@reduxjs/toolkit';
import { getJobPostings, addJobPosting, updateJobPosting, deleteJobPosting } from './jobpostingActions';

const jobPostingSlice = createSlice({
  name: 'jobPostings',
  initialState: {
    jobPostings: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getJobPostings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getJobPostings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobPostings = action.payload;
      })
      .addCase(getJobPostings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addJobPosting.fulfilled, (state, action) => {
        state.jobPostings.push(action.payload);
      })
      .addCase(updateJobPosting.fulfilled, (state, action) => {
        const index = state.jobPostings.findIndex((jobPosting) => jobPosting._id === action.payload.id);
        state.jobPostings[index] = action.payload;
      })
      .addCase(deleteJobPosting.fulfilled, (state, action) => {
        state.jobPostings = state.jobPostings.filter((jobPosting) => jobPosting._id !== action.payload);
      });
  },
});

export default jobPostingSlice.reducer;
