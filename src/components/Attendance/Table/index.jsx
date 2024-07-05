// src/components/AttendanceTable.js

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteAttendance from '../Delete';
import { deleteAttendance, getAttendances } from '../../../redux/attendance/attendanceActions';
import { AiFillDelete } from 'react-icons/ai';
import { useAuth } from '../../../context/auth_context';

const AttendanceTable = () => {
    const dispatch = useDispatch();
    const attendances = useSelector((state) => state.attendances.attendances);
    const [show, setShow] = useState(false);
    const [selectedAttendanceId, setSelectedAttendanceId] = useState(null);
    const { user } = useAuth();

    const handleDeleteClick = (id) => {
        setSelectedAttendanceId(id);
        setShow(true);
    };
    useEffect(() => {
        dispatch(getAttendances());
    }, [dispatch]);
    console.log(attendances);
    const handleClose = () => setShow(false);

    return (
        <div style={{ margin: '20px 30px' }}>
            <div className='d-flex justify-content-center align-items-center'><h2>Attendance List</h2>
            </div>
            {user?.role == 'admin' && <Link to={`/attendance/create`}>
                <Button
                    variant='secondary' className='ms-auto d-flex mb-3'
                >Create Attendance</Button></Link>}
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Employee</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Remark</th>
                        {user?.role == 'admin' && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {attendances.map((attendance) => (
                        <tr key={attendance._id}>
                            <td><img src={attendance.employeeId.image[0]} alt="avatar" style={{ borderRadius: '50%', height: "30px", width: '30px' }} /></td>
                            <td>{attendance.employeeId.employeename}</td>
                            <td>{attendance.date}</td>
                            <td>{attendance.status}</td>
                            <td>{attendance.remarks}</td>
                            {user?.role == 'admin' && <td className=''>
                                {/* <Link className='text-success' to={`/attendance/${attendance._id}`}><FaExternalLinkAlt /></Link> */}
                                {/* <Link to={`/attendance/update/${attendance._id}`} className="ml-2"><AiFillEdit /> */}
                                {/* </Link> */}

                                <AiFillDelete className='text-danger'
                                    onClick={() => handleDeleteClick(attendance._id)}

                                />

                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedAttendanceId && (
                <DeleteAttendance
                    show={show}
                    handleClose={handleClose}
                    deleteFunction={deleteAttendance(selectedAttendanceId)}
                />
            )}
        </div>
    );
};

export default AttendanceTable;
