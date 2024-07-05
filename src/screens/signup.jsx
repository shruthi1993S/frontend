import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { register } from '../services/ApiServices';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const validationSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    role: Yup.string()
        .required('Required')
});


function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const handleSubmit = async (values) => {
        try {
            const result = await register(values);
            console.log(result);
            if (result === "Registered Sucessfully")
                navigate("/signin");
            else
                setError(result)
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='' style={{ minWidth: '500px' }}>
            <h2>Sign-Up</h2><br></br>
            <Formik
                initialValues={{ username: '', email: '', password: '', role: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handleSubmit(values);
                }}
            >
                {({ errors, touched }) => (
                    <FormikForm>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Name</Form.Label>
                            <Field
                                name="username"
                                type="text"
                                placeholder="Enter the name"
                                className={`form-control ${errors.username && touched.username ? 'is-invalid' : ''}`}
                            />
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Field
                                name="email"
                                type="email"
                                placeholder="Email"
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

                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Role</Form.Label>
                            <Field
                                name="role"
                                as="select"
                                className={`form-select ${errors.role && touched.role ? 'is-invalid' : ''}`}
                                aria-label="Default role example"
                            >    <option >--SELECT--</option>
                                <option value="admin">Admin</option>
                                <option value="employee">Employee</option>
                                <option value="applicant">Applicant</option>
                            </Field>
                            <ErrorMessage name="role" component="div" className="invalid-feedback" />
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
            <Link to='/signin' className='mt-2' style={{ fontSize: '0.8rem' }}>Already have an account!</Link>

        </div>
    );
}

export default Signup;
