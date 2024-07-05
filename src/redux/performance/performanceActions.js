import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreatePerformance, DeletePerformance, GetPerformances, UpdatePerformance } from '../../services/ApiServices';


export const getPerformances = createAsyncThunk('performances/getPerformances', async () => {
    const response = await GetPerformances();
    console.log(response);
    return response;
});

export const addPerformance = createAsyncThunk('performances/addPerformance', async (performance) => {
    const response = await CreatePerformance(performance);
    return response;
});

export const updatePerformance = createAsyncThunk('performances/updatePerformance', async (performance) => {
    const response = await UpdatePerformance(performance, performance.id);
    return response;
});

export const deletePerformance = createAsyncThunk('performances/deletePerformance', async (id) => {
    await DeletePerformance(id);
    return id;
});
