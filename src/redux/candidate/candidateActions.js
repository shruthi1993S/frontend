import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateCandidate, DeleteCandidate, GetCandidateByUser, GetCandidates, UpdateCandidate } from '../../services/ApiServices';


export const getCandidates = createAsyncThunk('candidate/getCandidates', async () => {
    const response = await GetCandidates();
    return response;
});
export const getCandidateByUser = createAsyncThunk('candidate/getCandidates/user', async () => {
    const response = await GetCandidateByUser();
    return response;
});
export const addCandidate = createAsyncThunk('candidate/addCandidate', async (candidate) => {
    const response = await CreateCandidate(candidate);
    return response;
});

export const updateCandidate = createAsyncThunk('candidate/updateCandidate', async (candidate) => {
    const response = await UpdateCandidate(candidate, candidate.id);
    return response;
});

export const deleteCandidate = createAsyncThunk('candidate/deleteCandidate', async (id) => {
    await DeleteCandidate(id);
    return id;
});
