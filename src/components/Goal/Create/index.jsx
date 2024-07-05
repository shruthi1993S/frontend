import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal } from '../../../redux/goal/goalActions';
import { Bounce, toast } from 'react-toastify';
import { getUsers } from '../../../redux/employee/employeeActions';
import { useNavigate } from 'react-router-dom';

const CreateGoal = () => {
    const dispatch = useDispatch();
    const initialValues = {
        employeeId: '',
        completionDate: '',
        status: '',
        goalDescription: '',
    };
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        employeeId: Yup.string().required('Required'),
        completionDate: Yup.date().required('Required'),
        status: Yup.string().required('Required'),
        goalDescription: Yup.string().required('Required'),
    });

    const onSubmit = (values, { resetForm }) => {
        dispatch(addGoal(values));
        resetForm();
        navigate('/goal')
        toast.success('Goal created successfully!', {
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

    const employees = useSelector((state) => state.employees.users);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <div style={{ width: '500px', margin: '20px 30px' }}>
            <h2>Add Goal</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-3">
                            <BootstrapForm.Group className="mb-3" controlId="formBasicSelect">
                                <BootstrapForm.Label>Select Employee</BootstrapForm.Label>
                                <Field
                                    name="employeeId"
                                    as="select"
                                    className={`form-select ${errors.employeeId && touched.employeeId ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                >
                                    <option value="">Select an Employee</option>
                                    {employees.map((employee) => (
                                        <option key={employee._id} value={employee._id}>
                                            {employee.username}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="employeeId" component="div" className="invalid-feedback" />
                            </BootstrapForm.Group>
                        </div>

                        <div className="mb-3">
                            <label>completion Date</label>
                            <Field name="completionDate" type="date" className="form-control" />
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

                        <div className="mb-3">
                            <label>Description</label>
                            <Field name="goalDescription" type="text" className="form-control" />
                            <ErrorMessage name="goalDescription" component="div" className="text-danger" />
                        </div>

                        <Button variant="secondary" type="submit" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateGoal;
