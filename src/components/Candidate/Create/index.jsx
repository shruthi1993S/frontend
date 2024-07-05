// src/components/CreateCandidate.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCandidate } from '../../../redux/candidate/candidateActions';
import { Bounce, toast } from 'react-toastify';
import { getJobPostings } from '../../../redux/jobposting/jobpostingActions';
import { useEffect } from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/auth_context';

const CreateCandidate = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        coverLetter: '',
        jobPosting: '',
        media: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        coverLetter: Yup.string().required('Required'),
        jobPosting: Yup.string().required('Required'),
        media: Yup.mixed().required('Required'),
    });

    const onSubmit = (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('user', user._id);

        for (const key in values) {
            formData.append(key, values[key]);
        }
        dispatch(addCandidate(formData));
        resetForm();
        navigate('/candidate')

        toast.success('Candidate created successfully!', {
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
    const jobPostings = useSelector((state) => state.jobPostings.jobPostings);

    useEffect(() => {
        dispatch(getJobPostings());
    }, [dispatch]);
    return (
        <div style={{ width: '500px', margin: '20px 30px' }}>
            <h2>Add Candidate</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form>
                        <div className="mb-3">
                            <label>Candidate Name</label>
                            <Field name="name" type="text" className="form-control" />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <BootstrapForm.Group className="mb-3" controlId="formBasicSelect">
                                <BootstrapForm.Label>Select Job Posting</BootstrapForm.Label>
                                <Field
                                    name="jobPosting"
                                    as="select"
                                    className={`form-select ${errors.jobPosting && touched.jobPosting ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                >
                                    <option value="">Select Job Posting</option>
                                    {jobPostings.map((jobPosting) => (
                                        <option key={jobPosting._id} value={jobPosting._id}>
                                            {jobPosting.title}
                                        </option>
                                    ))}
                                </Field>
                                <ErrorMessage name="jobPosting" component="div" className="invalid-feedback" />
                            </BootstrapForm.Group>
                        </div>
                        <div className="mb-3">
                            <label>Cover Letter</label>
                            <Field name="coverLetter" as="textarea" type="text" className="form-control" />
                            <ErrorMessage name="coverLetter" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label>Upload Resume</label>
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
                            Add Candidate
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateCandidate;
