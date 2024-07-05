import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addInterview } from '../../../redux/interview/interviewActions';
import { Bounce, toast } from 'react-toastify';
import { getCandidates } from '../../../redux/candidate/candidateActions';
import { useNavigate } from 'react-router-dom';

const CreateInterview = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValues = {
        candidate: '',
        interviewDate: '',
        feedback: '',
        interviewer: '',
    };

    const validationSchema = Yup.object({
        candidate: Yup.string().required('Required'),
        interviewDate: Yup.date().required('Required'),
        feedback: Yup.string().required('Required'),
        interviewer: Yup.string().required('Required'),
    });

    const onSubmit = (values, { resetForm }) => {
        dispatch(addInterview(values));
        resetForm();
        navigate('/interview')
        toast.success('Interview created successfully!', {
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

    const candidates = useSelector((state) => state.candidates.candidates);

    useEffect(() => {
        dispatch(getCandidates());
    }, [dispatch]);

    return (
        <div style={{ width: '500px', margin: '20px 30px' }}>
            <h2>Status Update</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-3">
                            <BootstrapForm.Group className="mb-3" controlId="formBasicSelect">
                                <BootstrapForm.Label>Select Candidate</BootstrapForm.Label>
                                <Field
                                    name="candidate"
                                    as="select"
                                    className={`form-select ${errors.candidate && touched.candidate ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                >
                                    <option value="">Select an Candidate</option>
                                    {candidates.map((candidate) => (
                                        <option key={candidate._id} value={candidate._id}>
                                            {candidate.name}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="candidate" component="div" className="invalid-feedback" />
                            </BootstrapForm.Group>
                        </div>

                        <div className="mb-3">
                            <label>Interview Date</label>
                            <Field name="interviewDate" type="date" className="form-control" />
                            <ErrorMessage name="interviewDate" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label>Interviewer</label>
                            <Field name="interviewer" type="text" className="form-control" />
                            <ErrorMessage name="interviewer" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label>Remarks</label>
                            <Field name="feedback" type="text" className="form-control" />
                            <ErrorMessage name="feedback" component="div" className="text-danger" />
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

export default CreateInterview;
