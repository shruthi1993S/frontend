import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPerformance } from '../../../redux/performance/performanceActions';
import { Bounce, toast } from 'react-toastify';
import { getEmployees } from '../../../redux/employee/employeeActions';
import { useNavigate } from 'react-router-dom';

const CreatePerformance = () => {
    const dispatch = useDispatch();
    const initialValues = {
        employeeId: '',
        feedback: '',
        ratings: '',
    };
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        employeeId: Yup.string().required('Required'),
        ratings: Yup.string().required('Required'),
        feedback: Yup.string().required('Required'),
    });

    const onSubmit = (values, { resetForm }) => {
        dispatch(addPerformance(values));
        resetForm();
        navigate('/performance')
        toast.success('Performance created successfully!', {
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

    const employees = useSelector((state) => state.employees.employees);

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);

    return (
        <div style={{ width: '500px', margin: '20px 30px' }}>
            <h2>Add Performance</h2>
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
                                            {employee.employeename}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="employeeId" component="div" className="invalid-feedback" />
                            </BootstrapForm.Group>
                        </div>


                        <div className="mb-3">
                            <label>Feedback</label>
                            <Field name="feedback" type="text" className="form-control" />
                            <ErrorMessage name="feedback" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label>Ratings</label>
                            <Field name="ratings" type="text" className="form-control" />
                            <ErrorMessage name="ratings" component="div" className="text-danger" />
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

export default CreatePerformance;
