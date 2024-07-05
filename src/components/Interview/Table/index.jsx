
import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteInterview, getInterviews, getInterviewsByUser } from '../../../redux/interview/interviewActions';
import { useAuth } from '../../../context/auth_context';
import { AiFillDelete } from 'react-icons/ai';
import DeleteInterview from '../Delete';

const InterviewTable = () => {
    const dispatch = useDispatch();
    const interviews = useSelector((state) => state.interviews.interviews);
    const { user } = useAuth();
    const [show, setShow] = useState(false);
    const [selectedInterviewId, setSelectedInterviewId] = useState(null);

    const handleClose = () => setShow(false);
    const handleDeleteClick = (id) => {
        setSelectedInterviewId(id);
        setShow(true);
    };
    useEffect(() => {
        if (user?.role === 'applicant')
            dispatch(getInterviewsByUser());
        if (user?.role === 'admin' || user?.role == 'employee')
            dispatch(getInterviews());
    }, [dispatch, user?.role]);

    return (
        <div style={{ margin: '20px 30px' }}>
            <div className='d-flex justify-content-center align-items-center'><h3>Interview Selection Status</h3>
            </div>
            {user?.role == 'admin' && <Link to={`/interview/create`}>
                <Button
                    variant='secondary'
                    className='ms-auto d-flex mb-3'

                >Create Interview</Button></Link>}
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Applicant Name</th>
                        <th>Job Title</th>
                        <th>Interview Date</th>
                        <th>Interviewer</th>
                        <th>Remarks</th>
                        {user?.role == 'admin' && <th>Actions</th>}

                    </tr>
                </thead>
                <tbody>
                    {interviews.map((interview) => (
                        <tr key={interview._id}>
                            <td>{interview.candidate?.name}</td>
                            <td>{interview?.candidate?.jobPosting?.title}</td>
                            <td>{interview.interviewDate}</td>
                            <td>{interview.interviewer}</td>
                            <td>{interview.feedback}</td>
                            {user?.role == 'admin' && <td className=''>
                                {/* <Link className='text-success' to={`/candidate/${candidate._id}`}><FaExternalLinkAlt /></Link> */}
                                {/* <Link to={`/candidate/update/${candidate._id}`} className="ml-2"><AiFillEdit />
                                </Link> */}

                                <AiFillDelete className='text-danger'
                                    onClick={() => handleDeleteClick(interview._id)}

                                />

                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedInterviewId && (
                <DeleteInterview
                    show={show}
                    handleClose={handleClose}
                    deleteFunction={deleteInterview(selectedInterviewId)}
                />
            )}
        </div>
    );
};

export default InterviewTable;
