/* eslint-disable react/prop-types */
// src/components/UpdateEmployee.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee } from '../../../redux/employee/employeeActions';
import { useParams } from 'react-router-dom';

const UpdateEmployee = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const employee = useSelector((state) => state.employees.employees.find((emp) => emp._id === id));

    if (!employee) {
        return <div>Employee not found</div>;
    }
    const initialValues = {
        employeename: employee.employeename || '',
        email: employee.email || '',
        address: employee.address || '',
        phonenumber: employee.phonenumber || '',
        dateofbirth: employee.dateofbirth || '',
        designation: employee.designation || '',
        department: employee.department || '',
        dateofjoining: employee.dateofjoining || '',
    };

    const validationSchema = Yup.object({
        employeename: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        address: Yup.string().required('Required'),
        phonenumber: Yup.number().required('Required'),
        dateofbirth: Yup.date().required('Required'),
        designation: Yup.string().required('Required'),
        department: Yup.string().required('Required'),
        dateofjoining: Yup.date().required('Required'),
    });

    const onSubmit = (values) => {
        dispatch(updateEmployee({ ...values, id: id }));
    };

    return (
        <div style={{ width: '500px', margin: '20px 30px' }}>
            <h2>Update Employee</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <div className="mb-3">
                            <label>Employee Name</label>
                            <Field name="employeename" type="text" className="form-control" />
                            <ErrorMessage name="employeename" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <Field name="email" type="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Address</label>
                            <Field name="address" type="text" className="form-control" />
                            <ErrorMessage name="address" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Phone Number</label>
                            <Field name="phonenumber" type="text" className="form-control" />
                            <ErrorMessage name="phonenumber" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Date of Birth</label>
                            <Field name="dateofbirth" type="date" className="form-control" />
                            <ErrorMessage name="dateofbirth" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Designation</label>
                            <Field name="designation" type="text" className="form-control" />
                            <ErrorMessage name="designation" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Department</label>
                            <Field name="department" type="text" className="form-control" />
                            <ErrorMessage name="department" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Date of Joining</label>
                            <Field name="dateofjoining" type="date" className="form-control" />
                            <ErrorMessage name="dateofjoining" component="div" className="text-danger" />
                        </div>
                        <Button variant="secondary" type="submit" style={{ width: '100%' }} >
                            Update Employee
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateEmployee;
