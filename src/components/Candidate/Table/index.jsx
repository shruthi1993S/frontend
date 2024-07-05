// src/components/CandidateTable.js

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteCandidate from '../Delete';
import { deleteCandidate, getCandidateByUser, getCandidates } from '../../../redux/candidate/candidateActions';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useAuth } from '../../../context/auth_context';

const CandidateTable = () => {
    const dispatch = useDispatch();
    const candidates = useSelector((state) => state.candidates.candidates);
    const [show, setShow] = useState(false);
    const [selectedCandidateId, setSelectedCandidateId] = useState(null);
    const { user } = useAuth();

    const handleDeleteClick = (id) => {
        setSelectedCandidateId(id);
        setShow(true);
    };
    useEffect(() => {
        if (user?.role === 'applicant')
            dispatch(getCandidateByUser());
        if (user?.role === 'admin' || user?.role == 'employee')
            dispatch(getCandidates());
    }, [dispatch, user?.role]);
    const handleClose = () => setShow(false);
    return (
        <div style={{ margin: '20px 30px' }}>
            <div className='d-flex justify-content-center align-items-center mb-3'>
                <h3>Job Application & Status</h3>
            </div>
            {user?.role == 'applicant' && <Link to={`/candidate/create`}>
                <Button
                    variant='secondary'
                    className='ms-auto d-flex mb-3'
                >Apply Here to Join </Button></Link>}
            <Table bordered hover>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Cover Letter</th>
                        <th>Job Posting</th>
                        <th>Hired Status</th>
                        {user?.role == 'admin' && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                        <tr key={candidate.id}>
                            <td>{candidate.name}</td>
                            <td>{candidate.coverLetter}</td>
                            <td>{candidate.jobPosting?.title}</td>
                            <td>{candidate.hired}</td>

                            {user?.role == 'admin' && <td className='d-flex gap-2 align-items-center justify-content-center'>
                                {/* <Link className='text-success' to={`/candidate/${candidate._id}`}><FaExternalLinkAlt /></Link> */}
                                <Link to={`/candidate/update/${candidate._id}`} className="ml-2"><AiFillEdit />
                                </Link>

                                <AiFillDelete className='text-danger'
                                    onClick={() => handleDeleteClick(candidate._id)}

                                />

                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedCandidateId && (
                <DeleteCandidate
                    show={show}
                    handleClose={handleClose}
                    deleteFunction={deleteCandidate(selectedCandidateId)}
                />
            )}
        </div>
    );
};

export default CandidateTable;
