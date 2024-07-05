// src/components/EmployeeDetails.js

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const EmployeeDetails = () => {
  const { id } = useParams();
  const employee = useSelector((state) => state.employees.employees.find((emp) => emp._id === id));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="d-flex justify-content-center mt-5 ml-5">
      <Card style={{ width: '25rem', marginLeft: '20px' }}>
        {employee.image && <Card.Img variant="top" src={employee.image[0]} alt="Employee Image" style={{ height: '200px', width: 'auto', margin: '10px auto' }} />}
        <Card.Header as="h2" className="text-center">
          Employee Details
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroupItem><strong>Name:</strong> {employee.employeename}</ListGroupItem>
          <ListGroupItem><strong>Email:</strong> {employee.email}</ListGroupItem>
          <ListGroupItem><strong>Address:</strong> {employee.address}</ListGroupItem>
          <ListGroupItem><strong>Phone Number:</strong> {employee.phonenumber}</ListGroupItem>
          <ListGroupItem><strong>Date of Birth:</strong> {employee.dateofbirth}</ListGroupItem>
          <ListGroupItem><strong>Designation:</strong> {employee.designation}</ListGroupItem>
          <ListGroupItem><strong>Department:</strong> {employee.department}</ListGroupItem>
          <ListGroupItem><strong>Date of Joining:</strong> {employee.dateofjoining}</ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default EmployeeDetails;
