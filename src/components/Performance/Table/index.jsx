// src/components/PerformanceTable.js

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeletePerformance from '../Delete';
import { deletePerformance, getPerformances } from '../../../redux/performance/performanceActions';
import { AiFillDelete } from 'react-icons/ai';
import { useAuth } from '../../../context/auth_context';

const PerformanceTable = () => {
    const dispatch = useDispatch();
    const performances = useSelector((state) => state.performances.performances);
    const [show, setShow] = useState(false);
    const [selectedPerformanceId, setSelectedPerformanceId] = useState(null);
    const { user } = useAuth();

    const handleDeleteClick = (id) => {
        setSelectedPerformanceId(id);
        setShow(true);
    };
    useEffect(() => {
        dispatch(getPerformances());
    }, [dispatch]);
    const handleClose = () => setShow(false);

    return (
        <div style={{ margin: '20px 30px', minWidth: '600px' }}>
            <div className='d-flex justify-content-center align-items-center'><h3>Performance List</h3>
            </div>
            <Link to={`/performance/create`}>
                <Button
                    variant='secondary'
                    className='ms-auto d-flex mb-3'

                >Create Performance</Button></Link>
            <Table bordered hover>
                <thead>
                    <tr>
                        
                        <th>Employee</th>
                        <th>Feedback</th>
                        <th>Ratings</th>
                        {user?.role == 'admin' && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {performances.map((performance) => (
                        <tr key={performance._id}>
                            
                            <td>{performance.employeeId.employeename}</td>
                            <td>{performance.feedback}</td>
                            <td>{performance.ratings}</td>
                            {user?.role == 'admin' && <td className=''>
                                {/* <Link className='text-success' to={`/performance/${performance._id}`}><FaExternalLinkAlt /></Link> */}
                                {/* <Link to={`/performance/update/${performance._id}`} className="ml-2"><AiFillEdit /> */}
                                {/* </Link> */}

                                <AiFillDelete className='text-danger'
                                    onClick={() => handleDeleteClick(performance._id)}

                                />

                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedPerformanceId && (
                <DeletePerformance
                    show={show}
                    handleClose={handleClose}
                    deleteFunction={deletePerformance(selectedPerformanceId)}
                />
            )}
        </div>
    );
};

export default PerformanceTable;
