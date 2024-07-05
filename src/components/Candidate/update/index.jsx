/* eslint-disable react/prop-types */
// src/components/UpdateCandidate.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateCandidate } from '../../../redux/candidate/candidateActions';
import { useNavigate, useParams } from 'react-router-dom';
import { Form as BootstrapForm } from 'react-bootstrap';
import { Bounce, toast } from 'react-toastify';
const UpdateCandidate = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate('')
    const candidate = useSelector((state) => state.candidates.candidates.find((emp) => emp._id === id));

    if (!candidate) {
        return <div>Candidate not found</div>;
    }
    const initialValues = {
        name: candidate.name || '',
        jobPosting: candidate.jobPosting.title || '',
        coverLetter: candidate.coverLetter || '',
        hired: candidate.hired || false,

    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        jobPosting: Yup.string().required('Required'),
        coverLetter: Yup.string().required('Required'),
        hired: Yup.string().required('Required'),

    });

    const onSubmit = (values) => {
        navigate('/candidate')
        dispatch(updateCandidate({ hired: values.hired, id: id }));
        toast.success('Attendance created successfully!', {
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
            <h2>Update Candidate</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="mb-3">
                            <label>Candidate Name</label>
                            <Field name="name" type="text" className="form-control" disabled />
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Job Posting</label>
                            <Field name="jobPosting" type="jobPosting" className="form-control" disabled />
                            <ErrorMessage name="jobPosting" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Cover Letter</label>
                            <Field name="coverLetter" type="text" className="form-control" disabled />
                            <ErrorMessage name="coverLetter" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Cover Letter</label>
                            <Field name="coverLetter" type="text" className="form-control" disabled />
                            <ErrorMessage name="coverLetter" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <BootstrapForm.Group className="mb-3" controlId="formBasicSelect">
                                <BootstrapForm.Label>Status</BootstrapForm.Label>
                                <Field
                                    name="hired"
                                    as="select"
                                    className={`form-select ${errors.hired && touched.hired ? 'is-invalid' : ''}`}
                                    aria-label="Default select example"
                                >
                                    <option value=""></option>
                                    <option value={'HIRED'}>Hired</option>
                                    <option value={'REJECTED'}>Rejected</option>
                                </Field>
                                <ErrorMessage name="status" component="div" className="invalid-feedback" />
                            </BootstrapForm.Group>
                        </div>

                        <Button variant="secondary" type="submit" style={{ width: '100%' }} >
                            Update Candidate
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateCandidate;
