// src/components/CreateEmployee.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../../redux/employee/employeeActions';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValues = {
        employeename: '',
        email: '',
        address: '',
        phonenumber: '',
        dateofbirth: '',
        designation: '',
        department: '',
        dateofjoining: '',
        media: null,
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
        media: Yup.mixed().required('Required'),
    });

    const onSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        for (const key in values) {
            formData.append(key, values[key]);
        }
        dispatch(addEmployee(formData));
        resetForm();
        navigate('/employee')
        toast.success('Employee created successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    };

    return (
        <div style={{ width: '500px', margin: '20px 30px' }}>
            <h2>Add Employee</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ setFieldValue }) => (
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
                        <div className="mb-3">
                            <label>Upload Image</label>
                            <input
                                name="media"
                                type="file"
                                className="form-control"
                                onChange={(event) => {
                                    setFieldValue("media", event.currentTarget.files[0]);
                                }}
                            />
                            <ErrorMessage name="media" component="div" className="text-danger" />
                        </div>
                        <Button variant="secondary" type="submit" style={{ width: '100%' }} >
                            Add Employee
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateEmployee;
