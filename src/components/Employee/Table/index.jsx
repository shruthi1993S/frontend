// src/components/EmployeeTable.js

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteEmployee from '../Delete';
import { deleteEmployee, getEmployees } from '../../../redux/employee/employeeActions';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useAuth } from '../../../context/auth_context';

const EmployeeTable = () => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees.employees);
    const [show, setShow] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    const { user } = useAuth();

    const handleDeleteClick = (id) => {
        setSelectedEmployeeId(id);
        setShow(true);
    };
    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);
    const handleClose = () => setShow(false);

    return (
        <div style={{ margin: '20px 30px' }}>
            <div className='d-flex justify-content-center align-items-center'><h3>Employee List</h3>
            </div>
            {user?.role == 'admin' && <Link to={`/employee/create`}>
                <Button
                    variant='secondary'
                    className='ms-auto d-flex mb-3'

                >Create Employee</Button></Link>}
            <Table bordered hover>
                <thead>
                    <tr>
                        <th >Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Date of Birth</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Date of Joining</th>
                        {user?.role === 'admin' && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee._id}>
                            <td><img src={employee.image[0]} alt="avatar" style={{ borderRadius: '50%', height: "30px", width: '30px' }} /></td>
                            <td>{employee.employeename}</td>
                            <td>{employee.email}</td>
                            <td>{employee.address}</td>
                            <td>{employee.phonenumber}</td>
                            <td>{employee.dateofbirth}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.department}</td>
                            <td>{employee.dateofjoining}</td>
                            {user?.role == 'admin' && <td className='gap-2'>
                                <Link className='text-success ms-1' to={`/employee/${employee._id}`}><FaExternalLinkAlt /></Link>
                                <Link to={`/employee/update/${employee._id}`} className="ms-2"><AiFillEdit />
                                </Link>

                                <AiFillDelete className='text-danger ms-2'
                                    onClick={() => handleDeleteClick(employee._id)}
                                />

                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {
                selectedEmployeeId && (
                    <DeleteEmployee
                        show={show}
                        handleClose={handleClose}
                        employeeId={selectedEmployeeId}
                        deleteFunction={deleteEmployee(selectedEmployeeId)}

                    />

                )
            }
        </div >
    );
};

export default EmployeeTable;
