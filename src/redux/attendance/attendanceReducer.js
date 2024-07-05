import { createSlice } from '@reduxjs/toolkit';
import { getAttendances, addAttendance, updateAttendance, deleteAttendance } from './attendanceActions';

const attendanceSlice = createSlice({
  name: 'attendances',
  initialState: {
    attendances: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAttendances.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAttendances.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.attendances = action.payload;
      })
      .addCase(getAttendances.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAttendance.fulfilled, (state, action) => {
        state.attendances.push(action.payload);
      })
      .addCase(updateAttendance.fulfilled, (state, action) => {
        const index = state.attendances.findIndex((attendance) => attendance._id === action.payload.id);
        state.attendances[index] = action.payload;
      })
      .addCase(deleteAttendance.fulfilled, (state, action) => {
        state.attendances = state.attendances.filter((attendance) => attendance._id !== action.payload);
      });
  },
});

export default attendanceSlice.reducer;
