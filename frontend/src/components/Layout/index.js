import React from 'react';
import Header from '../Header';
import { Container,Row,Col} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.css';
//part13
const Layout = (props) => {
  return (
    <>
      <Header />
      {
        props.sidebar ?

          <Container fluid>
            <Row>
              <Col md={2} className="sidebar">
                <ul>
                  <li><NavLink exact to={'/'}>Home</NavLink></li>
                  <li><NavLink to={'/addstudenttoInstitute'}>AddStudent to Institute </NavLink></li>
                  <li><NavLink to={'/viewstudentininstitute'}>Student mangement in institute</NavLink></li>
                  <li><NavLink to={'/addstudenttoClass'}>AddStudent to Class </NavLink></li>
                  <li><NavLink to={'/viewstudentinClass'}>View Student  Class </NavLink></li>
                  <li><NavLink to={'/salary'}>Salary Management</NavLink></li>
                  <li><NavLink to={'/addsalary'}>Add salary Management</NavLink></li>
                  <li><NavLink to={'/classfees'}>Classfees Management</NavLink></li>
                  <li><NavLink to={'/addclassfees'}>AddClassfees Management</NavLink></li>
                  <li><NavLink to={'/addschedule'}>Create New Schedule</NavLink></li>
                  <li><NavLink to={'/allschedule'}>Schedule Management</NavLink>
                  <li><NavLink to={'/addadmin'}>Add Admin</NavLink></li>
                  <li><NavLink to={'/addteacher'}>AddTeacher Management</NavLink></li>
                  <li><NavLink to={'/adminmanagement'}>Admin Management</NavLink></li>
                  <li><NavLink to={'/teachermanagement'}>Teacher Management</NavLink></li>
                  
                  </li>
                </ul>
              </Col>
              <Col md={10} style={{ marginLeft: 'auto' ,paddingTop:'60px'  }}>
              {props.children}
                </Col>
            </Row>
          </Container>
          :
          props.children
        }
    

    </>
  )
}

export default Layout;