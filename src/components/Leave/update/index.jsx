/* eslint-disable react/prop-types */
// src/components/UpdateLeave.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateLeave } from '../../../redux/leave/leaveActions';
import { useNavigate, useParams } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const UpdateLeave = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate()
    const leave = useSelector((state) => state.leaves.leaves.find((emp) => emp._id === id));

    if (!leave) {
        return <div>Leave not found</div>;
    }
    const initialValues = {
        employeeId: leave.user.username || '',
        reason: leave.reason || '',
        Fromdate: leave.Fromdate || '',
        Todate: leave.Todate || '',
        status: leave.status || '',

    };

    const validationSchema = Yup.object({
        employeeId: Yup.string().required('Required'),
        reason: Yup.string().required('Required'),
        Fromdate: Yup.date().required('Required'),
        Todate: Yup.date().required('Required'),
        status: Yup.string().required('Required'),

    });

    const onSubmit = (values) => {
        navigate('/leave')
        dispatch(updateLeave({ status: values.status, id: id }));
        toast.success('Leave updated successfully!', {
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
            <h2>Update Leave</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-3">
                            <label>Employee Name</label>
                            <Field name="employeeId" disabled type="text" className="form-control" />
                            <ErrorMessage name="employeeId" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Reason</label>
                            <Field disabled name="reason" type="reason" className="form-control" />
                            <ErrorMessage name="reason" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>From Date</label>
                            <Field disabled name="Fromdate" type="text" className="form-control" />
                            <ErrorMessage name="Fromdate" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>To Date</label>
                            <Field disabled name="Todate" type="text" className="form-control" />
                            <ErrorMessage name="Todate" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <BootstrapForm.Group className="mb-3" controlId="formBasicSelect">
                                <BootstrapForm.Label>Status</BootstrapForm.Label>
                                <Field
                                    name="status"
                                    as="select"
                                    className={`form-select ${errors.status && touched.status ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                >
                                    <option value=""></option>
                                    <option value="approved">Approved</option>
                                    <option value="rejected">Rejected</option>

                                </Field>
                                <ErrorMessage name="status" component="div" className="invalid-feedback" />
                            </BootstrapForm.Group>
                        </div>

                        <Button variant="secondary" type="submit" style={{ width: '100%' }} >
                            Update Leave
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateLeave;
