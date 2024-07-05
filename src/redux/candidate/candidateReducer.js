import { createSlice } from '@reduxjs/toolkit';
import { getCandidates, addCandidate, getCandidateByUser, updateCandidate, deleteCandidate } from './candidateActions';

const candidateSlice = createSlice({
  name: 'candidate',
  initialState: {
    candidates: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCandidates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCandidates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.candidates = action.payload;
      })
      .addCase(getCandidates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getCandidateByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCandidateByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.candidates = action.payload;
      })
      .addCase(getCandidateByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addCandidate.fulfilled, (state, action) => {
        state.candidates.push(action.payload.application);
      })
      .addCase(updateCandidate.fulfilled, (state, action) => {
        const index = state.candidates.findIndex((candidate) => candidate._id === action.payload.id);
        state.candidates[index] = action.payload;
      })
      .addCase(deleteCandidate.fulfilled, (state, action) => {
        state.candidates = state.candidates.filter((candidate) => candidate._id !== action.payload);
      });
  },
});

export default candidateSlice.reducer;
