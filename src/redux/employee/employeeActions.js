import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateEmployee, DeleteEmployee, GetEmployees, GetUsers, UpdateEmployee } from '../../services/ApiServices';


export const getEmployees = createAsyncThunk('employees/getEmployees', async () => {
    const response = await GetEmployees();
    return response;
});
export const getUsers = createAsyncThunk('apiAuth/users', async () => {
    const response = await GetUsers();
    return response;
});
export const addEmployee = createAsyncThunk('employees/addEmployee', async (employee) => {
    const response = await CreateEmployee(employee);
    return response;
});

export const updateEmployee = createAsyncThunk('employees/updateEmployee', async (employee) => {
    const response = await UpdateEmployee(employee, employee.id);
    return response;
});

export const deleteEmployee = createAsyncThunk('employees/deleteEmployee', async (id) => {
    await DeleteEmployee(id);
    return id;
});
