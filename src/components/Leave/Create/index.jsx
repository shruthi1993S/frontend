import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addLeave } from '../../../redux/leave/leaveActions';
import { Bounce, toast } from 'react-toastify';
import { useAuth } from '../../../context/auth_context';
import { useNavigate } from 'react-router-dom';

const CreateLeave = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const initialValues = {
        Fromdate: '',
        Todate: '',
        reason: '',
    };
    const { user } = useAuth();

    const validationSchema = Yup.object({
        Fromdate: Yup.date().required('Required'),
        Todate: Yup.date().required('Required'),
        reason: Yup.string().required('Required'),
    });

    const onSubmit = (values, { resetForm }) => {
        values.user = user._id;
        dispatch(addLeave(values));
        resetForm();
        navigate('/leave')
        toast.success('Leave created successfully!', {
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
            <h2>Add Leave</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {() => (
                    <Form>


                        <div className="mb-3">
                            <label>Reason</label>
                            <Field name="reason" type="text" className="form-control" />
                            <ErrorMessage name="reason" component="div" className="text-danger" />
                        </div>

                        <div className="mb-3">
                            <label>From Date</label>
                            <Field name="Fromdate" type="date" className="form-control" />
                            <ErrorMessage name="Fromdate" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label>To Date</label>
                            <Field name="Todate" type="date" className="form-control" />
                            <ErrorMessage name="To  date" component="div" className="text-danger" />
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

export default CreateLeave;
