import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateJobPosting, DeleteJobPosting, GetJobPostings, UpdateJobPosting } from '../../services/ApiServices';


export const getJobPostings = createAsyncThunk('jobPostings/getJobPostings', async () => {
    const response = await GetJobPostings();
    return response;
});

export const addJobPosting = createAsyncThunk('jobPostings/addJobPosting', async (jobPosting) => {
    const response = await CreateJobPosting(jobPosting);
    return response;
});

export const updateJobPosting = createAsyncThunk('jobPostings/updateJobPosting', async (jobPosting) => {
    const response = await UpdateJobPosting(jobPosting, jobPosting.id);
    return response;
});

export const deleteJobPosting = createAsyncThunk('jobPostings/deleteJobPosting', async (id) => {
    await DeleteJobPosting(id);
    return id;
});
