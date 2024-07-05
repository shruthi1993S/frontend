import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employee/employeeReducer';
import attendanceReducer from './attendance/attendanceReducer';
import candidateReducer from './candidate/candidateReducer';
import goalReducer from './goal/goalReducer';
import interviewReducer from './interview/interviewReducer';
import jobpostingReducer from './jobposting/jobpostingReducer';
import leaveReducer from './leave/leaveReducer';
import performanceReducer from './performance/performanceReducer';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    attendances: attendanceReducer,
    candidates: candidateReducer,
    goals: goalReducer,
    interviews: interviewReducer,
    jobPostings: jobpostingReducer,
    leaves: leaveReducer,
    performances: performanceReducer,
  },
});

export default store;
