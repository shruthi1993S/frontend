import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateInterview, DeleteInterview, GetInterviews, GetInterviewsByUser, UpdateInterview } from '../../services/ApiServices';


export const getInterviews = createAsyncThunk('interviews/getInterviews', async () => {
    const response = await GetInterviews();
    return response;
});
export const getInterviewsByUser = createAsyncThunk('interviews/getInterviews/user', async () => {
    const response = await GetInterviewsByUser();
    return response;
});
export const addInterview = createAsyncThunk('interviews/addInterview', async (interview) => {
    const response = await CreateInterview(interview);
    return response;
});

export const updateInterview = createAsyncThunk('interviews/updateInterview', async (interview) => {
    const response = await UpdateInterview(interview, interview.id);
    return response;
});

export const deleteInterview = createAsyncThunk('interviews/deleteInterview', async (id) => {
    await DeleteInterview(id);
    return id;
});
