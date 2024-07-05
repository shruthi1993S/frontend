import { createSlice } from '@reduxjs/toolkit';
import { getPerformances, addPerformance, updatePerformance, deletePerformance } from './performanceActions';

const performanceSlice = createSlice({
  name: 'performances',
  initialState: {
    performances: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPerformances.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPerformances.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.performances = action.payload;
      })
      .addCase(getPerformances.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPerformance.fulfilled, (state, action) => {
        state.performances.push(action.payload);
      })
      .addCase(updatePerformance.fulfilled, (state, action) => {
        const index = state.performances.findIndex((performance) => performance._id === action.payload.id);
        state.performances[index] = action.payload;
      })
      .addCase(deletePerformance.fulfilled, (state, action) => {
        state.performances = state.performances.filter((performance) => performance._id !== action.payload);
      });
  },
});

export default performanceSlice.reducer;
