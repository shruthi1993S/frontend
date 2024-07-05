// src/components/GoalTable.js

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteGoal from '../Delete';
import { deleteGoal, getGoals, getGoalsByUser } from '../../../redux/goal/goalActions';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useAuth } from '../../../context/auth_context';

const GoalTable = () => {
    const dispatch = useDispatch();
    const goals = useSelector((state) => state.goals.goals);
    const [show, setShow] = useState(false);
    const [selectedGoalId, setSelectedGoalId] = useState(null);
    const { user } = useAuth();

    const handleDeleteClick = (id) => {
        setSelectedGoalId(id);
        setShow(true);
    };
    useEffect(() => {
        if (user?.role === 'employee')
            dispatch(getGoalsByUser());
        if (user?.role === 'admin')
            dispatch(getGoals());
    }, [dispatch, user?.role]);
    const handleClose = () => setShow(false);

    return (
        <div style={{ margin: '20px 30px' }}>
            <div className='d-flex justify-content-center align-items-center'><h3>Goal List</h3>
            </div>
            {user?.role == 'admin' && <Link to={`/goal/create`}>
                <Button
                    variant='secondary'
                    className='ms-auto d-flex mb-3'

                >Create Goal</Button></Link>}
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Completion Date</th>
                        <th>Description</th>
                        <th>Status</th>
                        {user?.role == 'admin' && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {goals.map((goal) => (
                        <tr key={goal._id}>
                            <td>{goal.employeeId?.username}</td>
                            <td>{goal.completionDate}</td>
                            <td>{goal.goalDescription}</td>
                            <td>{goal.status}</td>

                            {user?.role == 'admin' && <td className=''>
                                {/* <Link className='text-success' to={`/goal/${goal._id}`}><FaExternalLinkAlt /></Link> */}
                                <Link to={`/goal/update/${goal._id}`} className="me-2"><AiFillEdit />
                                </Link>

                                <AiFillDelete className='text-danger ms-2'
                                    onClick={() => handleDeleteClick(goal._id)}

                                />

                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedGoalId && (
                <DeleteGoal
                    show={show}
                    deleteFunction={deleteGoal(selectedGoalId)}
                    handleClose={handleClose}
                />
            )}
        </div>
    );
};

export default GoalTable;
