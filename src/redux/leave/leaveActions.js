import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateLeave, DeleteLeave, GetLeaves, GetLeavesByUser, UpdateLeave } from '../../services/ApiServices';


export const getLeaves = createAsyncThunk('leaves/getLeaves', async () => {
    const response = await GetLeaves();
    return response;
});
export const getLeavesByUser = createAsyncThunk('leaves/getLeaves/user', async () => {
    const response = await GetLeavesByUser();
    return response;
});
export const addLeave = createAsyncThunk('leaves/addLeave', async (leave) => {
    const response = await CreateLeave(leave);
    return response;
});

export const updateLeave = createAsyncThunk('leaves/updateLeave', async (leave) => {
    const response = await UpdateLeave(leave, leave.id);
    return response;
});

export const deleteLeave = createAsyncThunk('leaves/deleteLeave', async (id) => {
    await DeleteLeave(id);
    return id;
});
