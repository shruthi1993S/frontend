import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Page from './screens/page';
import Signin from './screens/signin';
import Signup from './screens/signup';
import Auth from './screens/auth';
import { Provider } from 'react-redux';
import store from './redux/store';
import Employee from './screens/employee';
import CreateEmployee from './components/Employee/Create';
import UpdateEmployee from './components/Employee/update';
import EmployeeDetails from './components/Employee/Details';
import Attendance from './components/Attendance/Table';
import Goal from './components/Goal/Table';
import Candidate from './components/Candidate/Table';
import Leave from './components/Leave/Table';
import Performance from './components/Performance/Table';
import Interview from './components/Interview/Table';
import JobPosting from './components/Jobposting/Table';
import CreateAttendance from './components/Attendance/Create';
import CreateGoal from './components/Goal/Create';
import CreatePerformance from './components/Performance/Create';
import CreateInterview from './components/Interview/Create';
import CreateJobPosting from './components/Jobposting/Create';
import CreateCandidate from './components/Candidate/Create';
import UpdateCandidate from './components/Candidate/update';
import CreateLeave from './components/Leave/Create';
import UpdateLeave from './components/Leave/update';
import UpdateAttendance from './components/Attendance/update';
import AttendanceDetails from './components/Attendance/Details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/auth_context';
import Dashboard from './screens/Dashboard';
import UpdateGoal from './components/Goal/update';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Page  ><Dashboard /> </Page>,
    },
    {
      path: "/employee",
      element: <Page><Employee /></Page>,
    },
    {
      path: "/employee/create",
      element: <Page><CreateEmployee /></Page>,
    },
    {
      path: "/employee/update/:id",
      element: <Page><UpdateEmployee /></Page>,
    },
    {
      path: "/employee/:id",
      element: <Page><EmployeeDetails /></Page>,
    },
    {
      path: "/signin",
      element: <Auth><Signin /></Auth>,
    },
    {
      path: "/signup",
      element: <Auth><Signup /></Auth>,
    },
    {
      path: "/attendance",
      element: <Page><Attendance /></Page>,
    },
    {
      path: "/attendance/create",
      element: <Page><CreateAttendance /></Page>,
    },
    {
      path: "/attendance/update/:id",
      element: <Page><UpdateAttendance /></Page>,
    },
    {
      path: "/attendance/:id",
      element: <Page><AttendanceDetails /></Page>,
    },
    {
      path: "/goal",
      element: <Page><Goal /></Page>,
    },
    {
      path: "/goal/create",
      element: <Page><CreateGoal /></Page>,
    },
    {
      path: "/goal/update/:id",
      element: <Page><UpdateGoal /></Page>,
    },
    {
      path: "/performance",
      element: <Page><Performance /></Page>,
    },
    {
      path: "/performance/create",
      element: <Page><CreatePerformance /></Page>,
    },
    {
      path: "/interview",
      element: <Page><Interview /></Page>,
    },
    {
      path: "/interview/create",
      element: <Page><CreateInterview /></Page>,
    },
    {
      path: "/jobPosting",
      element: <Page><JobPosting /></Page>,
    },
    {
      path: "/jobPosting/create",
      element: <Page><CreateJobPosting /></Page>,
    },
    {
      path: "/candidate",
      element: <Page><Candidate /></Page>,
    },
    {
      path: "/candidate/create",
      element: <Page><CreateCandidate /></Page>,
    },
    {
      path: "/candidate/update/:id",
      element: <Page><UpdateCandidate /></Page>,
    },
    {
      path: "/leave",
      element: <Page><Leave /></Page>,
    },
    {
      path: "/leave/create",
      element: <Page><CreateLeave /></Page>,
    },
    {
      path: "/leave/update/:id",
      element: <Page><UpdateLeave /></Page>,
    },
  ]);
  return (
    <div>
      <AuthContextProvider>
        <Provider store={store}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <RouterProvider router={router} />
        </Provider>
      </AuthContextProvider>
    </div>
  )
}

export default App
