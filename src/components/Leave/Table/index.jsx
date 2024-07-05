// src/components/LeaveTable.js

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLeave, getLeaves, getLeavesByUser } from '../../../redux/leave/leaveActions';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useAuth } from '../../../context/auth_context';
import DeleteLeave from '../Delete';

const LeaveTable = () => {
    const dispatch = useDispatch();
    const leaves = useSelector((state) => state.leaves.leaves);
    const { user } = useAuth();
    const [selectedLeaveId, setSelectedLeaveId] = useState(null);
    const [show, setShow] = useState(false);

    const handleDeleteClick = (id) => {
        setSelectedLeaveId(id);
        setShow(true);
    };
    const handleClose = () => setShow(false);

    useEffect(() => {
        if (user?.role === 'employee')
            dispatch(getLeavesByUser());
        if (user?.role === 'admin')
            dispatch(getLeaves());
    }, [dispatch, user?.role]);

    return (
        <div style={{ margin: '20px 30px' }}>
            <div className='d-flex justify-content-center align-items-center'><h3>Leave List</h3>
            </div>
            {user?.role == 'employee' && <Link to={`/leave/create`}>
                <Button
                    variant='secondary'
                    className='ms-auto d-flex mb-3'

                >Create Leave</Button></Link>}
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Reason</th>
                        <th>From date</th>
                        <th>To date</th>
                        <th>Status</th>
                        {(user?.role === 'admin' || user?.role === 'employee') && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {leaves.map((leave) => (
                        <tr key={leave._id}>
                            <td> {leave.user?.username}</td>
                            <td>{leave.reason}</td>
                            <td>{leave.Fromdate}</td>
                            <td>{leave.Todate}</td>
                            <td>{leave.status}</td>
                            <td className=''>
                                {/* <Link className='text-success' to={`/leave/${leave._id}`}><FaExternalLinkAlt /></Link> */}
                                {user?.role == 'admin' && <Link to={`/leave/update/${leave._id}`} className="ml-2"><AiFillEdit />
                                </Link>

                                }
                                {user?.role == 'employee' &&

                                    <AiFillDelete className='text-danger'
                                        onClick={() => handleDeleteClick(leave._id)}
                                    />
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedLeaveId && (
                <DeleteLeave
                    show={show}
                    handleClose={handleClose}
                    deleteFunction={deleteLeave(selectedLeaveId)}
                />
            )}
        </div>
    );
};

export default LeaveTable;
