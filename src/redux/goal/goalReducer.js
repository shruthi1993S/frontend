import { createSlice } from '@reduxjs/toolkit';
import { getGoals, addGoal, updateGoal, deleteGoal, getGoalsByUser } from './goalActions';

const goalSlice = createSlice({
  name: 'goals',
  initialState: {
    goals: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGoals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGoals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.goals = action.payload;
      })
      .addCase(getGoals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getGoalsByUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGoalsByUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.goals = action.payload;
      })
      .addCase(getGoalsByUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addGoal.fulfilled, (state, action) => {
        state.goals.push(action.payload);
      })
      .addCase(updateGoal.fulfilled, (state, action) => {
        const index = state.goals.findIndex((goal) => goal._id === action.payload.id);
        state.goals[index] = action.payload;
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.goals = state.goals.filter((goal) => goal._id !== action.payload);
      });
  },
});

export default goalSlice.reducer;
