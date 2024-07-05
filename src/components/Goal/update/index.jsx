/* eslint-disable react/prop-types */
// src/components/UpdateGoal.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateGoal } from '../../../redux/goal/goalActions';
import { useNavigate, useParams } from 'react-router-dom';
import { Form as BootstrapForm } from 'react-bootstrap';

const UpdateGoal = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const goal = useSelector((state) => state.goals.goals.find((emp) => emp._id === id));
    const navigate = useNavigate()

    if (!goal) {
        return <div>Goal not found</div>;
    }
    const initialValues = {
        employeeId: goal.employeeId.username || '',
        completionDate: goal.completionDate || '',
        goalDescription: goal.goalDescription || '',
        status: goal.status || ''
    };

    const validationSchema = Yup.object({
        employeeId: Yup.string().required('Required'),
        completionDate: Yup.date().required('Required'),
        goalDescription: Yup.string().required('Required'),
        status: Yup.string().required('Required'),
    });

    const onSubmit = (values) => {

        dispatch(updateGoal({ status: values.status, id: id }));
        navigate('/goal')

    };

    return (
        <div style={{ width: '500px', margin: '20px 30px' }}>
            <h2>Update Goal</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-3">
                            <label>Employee</label>
                            <Field name="employeeId" type="text" disabled className="form-control" />
                            <ErrorMessage name="employeeId" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Goal Description</label>
                            <Field name="goalDescription" type="text" disabled className="form-control" />
                            <ErrorMessage name="goalDescription" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Completion Date</label>
                            <Field name="completionDate" type="date" disabled className="form-control" />
                            <ErrorMessage name="completionDate" component="div" className="text-danger" />
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
                                    <option value="">Select Status</option>
                                    <option value="OVERDUE">Over Due</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="COMPLETED">completed</option>

                                </Field>
                                <ErrorMessage name="status" component="div" className="invalid-feedback" />
                            </BootstrapForm.Group>
                        </div>
                        <Button variant="secondary" type="submit" style={{ width: '100%' }} >
                            Update Goal
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateGoal;
