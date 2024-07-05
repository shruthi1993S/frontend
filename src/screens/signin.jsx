import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { login } from '../services/ApiServices';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../context/auth_context';
import './auth.css'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
});

function Signin() {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const [error, setError] = useState('')
    const handleSubmit = async (values) => {
        try {
            const result = await login(values);
            if (result !== "Invalid credentials") {
                localStorage.setItem('token', "Bearer " + result.token)
                if (result.user.role == 'admin')
                    navigate("/");
                if (result.user.role == 'applicant')
                    navigate("/jobPosting");
                if (result.user.role == 'employee')
                    navigate("/employee");
                setUser(result.user)
            }
            else
                setError(result)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='' style={{ minWidth: '500px' }}>
            <h2>Sign-In</h2><br />

            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <FormikForm>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Enter the email"
                                className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                            />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                            />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </Form.Group>



                        <Button variant="secondary" style={{ width: '100%',backgroundColor: '#0056b3' }} type="submit">
                            Submit
                        </Button>
                        {error && <Alert variant={'danger'} className='mt-2'>
                            {error}
                        </Alert>}
                    </FormikForm>
                )}
            </Formik>
            <Link to='/signup' className='mt-2' style={{ fontSize: '0.8rem' }}>Haven't signed up? Click here !!</Link>
        </div>
    );
}

export default Signin;
