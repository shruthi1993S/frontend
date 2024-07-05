import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateAttendance, DeleteAttendance, GetAttendances, UpdateAttendance } from '../../services/ApiServices';


export const getAttendances = createAsyncThunk('attendances/getAttendances', async () => {
    const response = await GetAttendances();
    console.log(response);
    return response;
});

export const addAttendance = createAsyncThunk('attendances/addAttendance', async (attendance) => {
    const response = await CreateAttendance(attendance);
    return response;
});

export const updateAttendance = createAsyncThunk('attendances/updateAttendance', async (attendance) => {
    const response = await UpdateAttendance(attendance, attendance.id);
    return response;
});

export const deleteAttendance = createAsyncThunk('attendances/deleteAttendance', async (id) => {
    await DeleteAttendance(id);
    return id;
});
