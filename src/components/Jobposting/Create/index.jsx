// src/components/CreateJobposting.js

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addJobPosting } from '../../../redux/jobposting/jobpostingActions';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateJobposting = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const initialValues = {
        title: '',
        description: '',
        postedAt: '',
        location: '',
        salaryRange: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        postedAt: Yup.date().required('Required'),
        location: Yup.string().required('Required'),
        salaryRange: Yup.string().required('Required'),

    });

    const onSubmit = (values, { resetForm }) => {

        dispatch(addJobPosting(values));
        resetForm();
        navigate('/jobPosting')
        toast.success('Jobposting created successfully!', {
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
            <h2>Add Jobposting</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>
                        <div className="mb-3">
                            <label>Job Title</label>
                            <Field name="title" type="text" className="form-control" />
                            <ErrorMessage name="title" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label>Description</label>
                            <Field name="description" type="text" className="form-control" />
                            <ErrorMessage name="description" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label>posted Date</label>
                            <Field name="postedAt" type="date" className="form-control" />
                            <ErrorMessage name="postedAt" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Location</label>
                            <Field name="location" type="text" className="form-control" />
                            <ErrorMessage name="location" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>Salary Range</label>
                            <Field name="salaryRange" type="text" className="form-control" />
                            <ErrorMessage name="salaryRange" component="div" className="text-danger" />
                        </div>

                        <Button variant="secondary" type="submit" style={{ width: '100%' }} >
                            Add Job Posting
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateJobposting;
