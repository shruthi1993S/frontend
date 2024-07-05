import { Nav } from 'react-bootstrap';
import { MdDashboard, MdWork } from "react-icons/md";
import { FaCalendarAlt, FaUserTie, FaUsers } from "react-icons/fa";
import './index.css'
import { Link, useLocation } from 'react-router-dom';
import { GiStairsGoal } from 'react-icons/gi';
import { GrDocumentPerformance } from 'react-icons/gr';
import { ImUserTie } from 'react-icons/im';
import { useAuth } from '../../context/auth_context';
const Sidebar = () => {
  const location = useLocation();


  const { user } = useAuth();

  const AdminMenu = [
    { lable: 'Employee', icon: <FaUsers />, url: '/employee' },
    { lable: 'Attendance', icon: <FaCalendarAlt />, url: '/attendance' },
    { lable: 'Leave', icon: <FaCalendarAlt />, url: '/leave' },
    { lable: 'Goal', icon: <GiStairsGoal />, url: '/goal' },
    { lable: 'Performance', icon: <GrDocumentPerformance />, url: '/performance' },
    { lable: 'Interview', icon: <FaUserTie />, url: '/interview' },
    { lable: 'Job Posting', icon: <MdWork />, url: '/jobPosting' },
    { lable: 'Job Application', icon: <ImUserTie />, url: '/candidate' },
  ];
  const EmployeeMenu = [
    { lable: 'Employee', icon: <FaUsers />, url: '/employee' },
    { lable: 'Leave', icon: <FaCalendarAlt />, url: '/leave' },
    { lable: 'Goal', icon: <GiStairsGoal />, url: '/goal' },
    { lable: 'Job Posting', icon: <MdWork />, url: '/jobPosting' },
  ];
  const applicantMenu = [
    { lable: 'Job Posting', icon: <MdWork />, url: '/jobPosting' },
    { lable: 'Job Application', icon: <ImUserTie />, url: '/candidate' },
    { lable: 'Interview', icon: <FaUserTie />, url: '/interview' },
  ];
  return (
    <div className="d-flex flex-column bg-dark sidebar_container" >
      <Nav className="flex-column mt-4">
        {user?.role == 'admin' && <><Link to={'/'} className={`d-flex sidebar_link align-items-center gap-4 mx-3 fs-6 ${(location.pathname === "/") ? 'bg-white text-secondary rounded-pill' : ' text-white '}`}>
          <MdDashboard />
          Dashboard</Link><>  {AdminMenu.map((data, index) => (
            <Link to={data.url} key={index} className={`d-flex sidebar_link align-items-center gap-4 mx-3 fs-6 ${(location.pathname.includes(data.url)) ? 'bg-white text-secondary rounded-pill' : ' text-white '}`}>
              {data.icon}
              {data.lable}</Link>))} </></>}

        {user?.role == 'applicant' && <> {applicantMenu.map((data, index) => (
          <Link to={data.url} key={index} className={`d-flex sidebar_link align-items-center gap-4 mx-3 fs-6 ${(location.pathname.includes(data.url)) ? 'bg-white text-secondary rounded-pill' : ' text-white '}`}>
            {data.icon}
            {data.lable}</Link>))} </>}
        {user?.role == 'employee' && <> {EmployeeMenu.map((data, index) => (
          <Link to={data.url} key={index} className={`d-flex sidebar_link align-items-center gap-4 mx-3 fs-6 ${(location.pathname.includes(data.url)) ? 'bg-white text-secondary rounded-pill' : ' text-white '}`}>
            {data.icon}
            {data.lable}</Link>))} </>}


      </Nav>
    </div>
  );
};

export default Sidebar;
