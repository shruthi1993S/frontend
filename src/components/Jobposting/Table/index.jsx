// src/components/JobPostingTable.js

import { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteJobPosting from '../Delete';
import { deleteJobPosting, getJobPostings } from '../../../redux/jobposting/jobpostingActions';
import { AiFillDelete } from 'react-icons/ai';
import { useAuth } from '../../../context/auth_context';

const JobPostingTable = () => {
    const dispatch = useDispatch();
    const jobPostings = useSelector((state) => state.jobPostings.jobPostings);
    const [show, setShow] = useState(false);
    const [selectedJobPostingId, setSelectedJobPostingId] = useState(null);
    const { user } = useAuth();

    const handleDeleteClick = (id) => {
        setSelectedJobPostingId(id);
        setShow(true);
    };
    useEffect(() => {
        dispatch(getJobPostings());
    }, [dispatch]);
    const handleClose = () => setShow(false);
    return (//
        <div style={{ margin: '20px 30px' }}>
            <div className='d-flex justify-content-center align-items-center'><h3>Job Opportunities</h3>
            </div>
            {user?.role == 'admin' && <Link to={`/jobPosting/create`}>
                <Button
                    variant='secondary'
                    className='ms-auto d-flex mb-3'
                >Create JobPosting</Button></Link>}
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Location</th>
                        <th>Salary Range</th>
                        <th>Posted Date</th>
                        {user?.role == 'admin' && <th>Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {jobPostings.map((jobPosting) => (
                        <tr key={jobPosting.id}>
                            <td>{jobPosting.title}</td>
                            <td>{jobPosting.description}</td>
                            <td>{jobPosting.location}</td>
                            <td>{jobPosting.salaryRange}</td>
                            <td>{jobPosting.postedAt}</td>

                            {user?.role == 'admin' && <td >
                                {/* <Link className='text-success' to={`/jobPosting/${jobPosting._id}`}><FaExternalLinkAlt /></Link>
                                <Link to={`/jobPosting/update/${jobPosting._id}`} className="ml-2"><AiFillEdit /> */}
                                {/* </Link> */}

                                <AiFillDelete className='text-danger'
                                    onClick={() => handleDeleteClick(jobPosting._id)}

                                />

                            </td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedJobPostingId && (
                <DeleteJobPosting
                    show={show}
                    handleClose={handleClose}
                    deleteFunction={deleteJobPosting(selectedJobPostingId)}
                />
            )}
        </div>
    );
};

export default JobPostingTable;
