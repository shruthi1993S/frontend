/* eslint-disable react-refresh/only-export-components */
const serverBaseURL = 'https://backend-p2ro.onrender.com'
const handleUnauthorized = () => {
    window.location.replace('/signin')
};

export const login = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiAuth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)

    });
    return res.json();
};
export const register = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiAuth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
    return res.json();
};
export const GetUser = async () => {
    const res = await fetch(`${serverBaseURL}/apiAuth/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    // if (res.status == 401)
    //     return handleUnauthorized()
    // 

    return res.json();
};
export const GetUsers = async () => {
    const res = await fetch(`${serverBaseURL}/apiAuth/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized()


    return res.json();
};
// Employee
export const GetEmployees = async () => {
    const res = await fetch(`${serverBaseURL}/apiEmployees/employee`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized()

    return res.json();
};
export const CreateEmployee = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiEmployees/employee`, {
        method: 'POST',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        body: body
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdateEmployee = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiEmployees/employee/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeleteEmployee = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiEmployees/employee/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};
//Attendance
export const GetAttendances = async () => {
    const res = await fetch(`${serverBaseURL}/apiAttendance/attendance`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized()

    return res.json();
};
export const CreateAttendance = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiAttendance/attendance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdateAttendance = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiAttendance/attendance/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeleteAttendance = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiAttendance/attendance/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};
//Leave
export const GetLeaves = async () => {
    const res = await fetch(`${serverBaseURL}/apiLeaveRequest/leave`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const GetLeavesByUser = async () => {
    const res = await fetch(`${serverBaseURL}/apiLeaveRequest/leave/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const CreateLeave = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiLeaveRequest/leave`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdateLeave = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiLeaveRequest/leave/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeleteLeave = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiLeaveRequest/leave/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};
//Goal
export const GetGoals = async () => {
    const res = await fetch(`${serverBaseURL}/apiGoals/goal`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });

    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const GetGoalsByUser = async () => {
    const res = await fetch(`${serverBaseURL}/apiGoals/goal/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });

    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const CreateGoal = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiGoals/goal`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdateGoal = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiGoals/goal/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeleteGoal = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiGoals/goal/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};
//Interview
export const GetInterviews = async () => {
    const res = await fetch(`${serverBaseURL}/apiInterviews/schedule`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });

    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const GetInterviewsByUser = async () => {
    const res = await fetch(`${serverBaseURL}/apiInterviews/schedule/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });

    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const CreateInterview = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiInterviews/schedule`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdateInterview = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiInterviews/schedule/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeleteInterview = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiInterviews/schedule/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};
//JobPosting
export const GetJobPostings = async () => {
    const res = await fetch(`${serverBaseURL}/apiJobPosting/jobs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const CreateJobPosting = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiJobPosting/job`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdateJobPosting = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiJobPosting/job/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeleteJobPosting = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiJobPosting/job/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};
//Performance
export const GetPerformances = async () => {
    const res = await fetch(`${serverBaseURL}/apiPerformances/performance`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });

    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const CreatePerformance = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiPerformances/performance`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdatePerformance = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiPerformances/performance/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeletePerformance = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiPerformances/performance/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};
//Candidate
export const GetCandidates = async () => {
    const res = await fetch(`${serverBaseURL}/apiCandidates/applications`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const GetCandidateByUser = async () => {
    console.log("object");
    const res = await fetch(`${serverBaseURL}/apiCandidates/application/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    console.log(res);
    if (res.status == 401)
        return handleUnauthorized()
    // 

    return res.json();
};
export const CreateCandidate = async (body) => {
    const res = await fetch(`${serverBaseURL}/apiCandidates/apply`, {
        method: 'POST',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        body: body
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const UpdateCandidate = async (body, id) => {
    const res = await fetch(`${serverBaseURL}/apiCandidates/applications/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
        body: JSON.stringify(body)
    });
    if (res.status == 401)
        return handleUnauthorized()
    return res.json();
};
export const DeleteCandidate = async (id) => {
    const res = await fetch(`${serverBaseURL}/apiCandidates/applications/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};

export const GetMetrics = async () => {
    const res = await fetch(`${serverBaseURL}/metrics/metrics`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('token')
        },
    });
    if (res.status == 401)
        return handleUnauthorized();
    return res.json();
};