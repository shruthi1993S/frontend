import { Navbar, Nav } from 'react-bootstrap';
import './index.css'
import { useAuth } from '../../context/auth_context';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownDivider from 'react-bootstrap/DropdownDivider'
import { IoLogOut } from 'react-icons/io5';
const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();


  return (
    <Navbar bg="dark" expand="lg" className='px-4 text-white'>
      <Navbar.Brand className='' style={{ width: '187px' }}>

      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav justify-content-end" />

      <Navbar.Collapse id="basic-navbar-nav" className=" ">
        <Nav style={{ width: '100%' }} className="  text-white">
          <h4 className='text-white mx-auto text-capitalize mt-3 text-center'>Welcome {user?.username}..!!</h4>

          <Nav.Link >
            <Dropdown className='bg-dark text-white' >
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <img src={'/assets/images/user.png'} alt='user' className='navbar_user bg-white' />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ marginLeft: '-130px' }}>
                <Dropdown.Item className='fw-bold text-center'>{user && user?.username}</Dropdown.Item>
                <Dropdown.Item className='fw-bold text-center'  >{user && user?.email}</Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Item
                  className='text-center'
                  onClick={() => {
                    localStorage.removeItem('token')
                    navigate('/signin')
                  }}>Logout<IoLogOut className='ms-2' /></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
