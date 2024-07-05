import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateGoal, DeleteGoal, GetGoals, GetGoalsByUser, UpdateGoal } from '../../services/ApiServices';


export const getGoals = createAsyncThunk('goals/getGoals', async () => {
    const response = await GetGoals();
    return response;
});
export const getGoalsByUser = createAsyncThunk('goals/getGoals/user', async () => {
    const response = await GetGoalsByUser();
    return response;
});
export const addGoal = createAsyncThunk('goals/addGoal', async (goal) => {
    const response = await CreateGoal(goal);
    return response;
});

export const updateGoal = createAsyncThunk('goals/updateGoal', async (goal) => {
    const response = await UpdateGoal(goal, goal.id);
    return response;
});

export const deleteGoal = createAsyncThunk('goals/deleteGoal', async (id) => {
    await DeleteGoal(id);
    return id;
});
