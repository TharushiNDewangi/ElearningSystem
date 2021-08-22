
import React, { useState ,useEffect} from 'react'
import Layout from '../Layout'

import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../UI/Input';
import Modal from '../UI/Modal';

import axios from "axios";
//import './style.css';
//create products function
const StudentinInstitute = (props) => {
    
    const [studentsininstitute, setstudentininstitute] = useState([]);
    const [studentDetailModal, setStudentDetails] = useState(null);
    const [searchresult, setSearchresult] = useState(null);
    const [updateDetailModal, setupdateDetails] = useState(null);
    const [deleteDetailModal, setDeleteDetails] = useState(null);
    const [searchDetailModal, setSearchDetails] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Studentclass, setStudentclass] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [subject, setSubject] = useState("");
    const [searchid, setSearchid] = useState("");

    const submitStudentForm = (id) => {
        let data = {
            name:name,
            email: email,
            year:year,
            month:month,
            Studentclass: Studentclass,
            subject: subject
        }

        console.log(id);
        axios.put(`http://localhost:8065/api/studentInstitute/edit/${id}`, data)
            .then(res => {
                alert("approved");
                console.log(data);
                console.log('added');
            })
        //dispatch(addProduct(form)).then(() => setShow(false));
    };
    const Searchresult = (id) => {
        let data = {
            studentId: id,
        }
        
        console.log("id :");
        console.log(data);
        axios.post(`http://localhost:8065/api/studentInstitute/sech`,data)
            .then(res => {
                console.log(res.data.data);
                setSearchresult(res.data.data)
                console.log('added');
                console.log(res.data);
            })
        //dispatch(addProduct(form)).then(() => setShow(false));
    };
  console.log("ddddd");
    useEffect(() => {
        function getStudentinInstitute() {
            axios.get(`http://localhost:8065/api/studentInstitute/viewall`).then((res) => {
                console.log(res.data.data);
                console.log("res.data");
                setstudentininstitute(res.data.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudentinInstitute();
    }, [])
   
   
    const handleCloseStudentDetailsModal = () => {
        setStudentDetails(false);
    }

    
    const handleCloseUpdateDetailsModal = () => {
        setupdateDetails(false);
    }
    const handleCloseDeleteDetailsModal = () => {
        setDeleteDetails(false);
    }
    const handleCloseSearchDetailsModal = () => {
        setSearchresult(false);
    }
    //show product detail modal
    const showStudentDetailModal = (student) => {

        setStudentDetails(student);
        //setProductDetailModal(true);
        console.log('nnn'+student);

    }
    const UpdateDetailModal = (student) => {

        setupdateDetails(student);
        //setProductDetailModal(true);
        console.log('nnn' + student);

    }
    const DeleteDetailModal = (student) => {

        setDeleteDetails(student);
        //setProductDetailModal(true);
        console.log('nnn' + student);

    }
    const SearchDetailModal = (student) => {

        setSearchDetails(student);
        //setProductDetailModal(true);
        console.log('nnn' + student);

    }
    const renderStudentDetailsModal = () => {

        if (!studentDetailModal) {
            return null;
        }
        console.log('nnn');

        
       return (
            <Modal
                show={studentDetailModal}
                handleClose={handleCloseStudentDetailsModal}
                modalTitle={'Student Details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="key">{studentDetailModal.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{studentDetailModal.email}</p>
                    </Col>
                </Row>
                <Row>
                   
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{studentDetailModal.Studentclass}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Subject</label>
                        <p className="key">{studentDetailModal.subject}</p>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Year</label>
                        <p className="key">{studentDetailModal.year}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Month</label>
                        <p className="key">{studentDetailModal.month}</p>
                    </Col>
                   
                    
                </Row>
               
                

            </Modal>
        );
    }
    const renderDeleteDetailsModal = () => {

        if (!deleteDetailModal) {
            return null;
        }
        console.log('nnn');
        return (
            <Modal
                show={deleteDetailModal}
                handleClose={handleCloseDeleteDetailsModal}
                modalTitle={'Delete Student'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="key">{deleteDetailModal.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{deleteDetailModal.email}</p>
                    </Col>
                </Row>
                <Row>
                   
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{deleteDetailModal.Studentclass}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{deleteDetailModal.subject}</p>
                    </Col>

                </Row>
                <Row>
                   
                    <Col md="6">
                        <label className="key">MOnth</label>
                        <p className="key">{deleteDetailModal.month}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Year</label>
                        <p className="key">{deleteDetailModal.year}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">id</label>
                        <p className="key">{deleteDetailModal._id}</p>
                    </Col>

                </Row>
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/studentInstitute/del/${deleteDetailModal._id}`)
                                .then(res => {
                                    alert("approved");
                                    console.log('added');
                                })}>Delete</button>

                        <button className="userListEdit" >Edit</button>


                    </Col>
                </Row>


            </Modal>
        );
    }
    const renderUpdateDetailsModal = () => {

        if (!updateDetailModal) {
            return null;
        }
        console.log('dewnnn');
        return (
            <Modal
                show={updateDetailModal}
                handleClose={handleCloseUpdateDetailsModal}
                modalTitle={'Student Details'}
                size="lg"

            >
                <Row>
                    <Input
                        label="Name"
                        value={name}
                        placeholder={updateDetailModal.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        value={email}
                        placeholder={updateDetailModal.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="student class"
                        value={Studentclass}
                        placeholder={updateDetailModal.Studentclass}
                        onChange={(e) => setStudentclass(e.target.value)}
                    />
                    <Input
                        label="Subject"
                        value={subject}
                        placeholder={updateDetailModal.subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                     <Input
                        label="Year"
                        value={year}
                        placeholder={updateDetailModal.year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                     <Input
                        label="Month"
                        value={month}
                        placeholder={updateDetailModal.month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                    <Col md="6">
                        <button className="userListDel"
                        >Delete</button>
                        <button className="userListEdit" onClick={e => submitStudentForm(updateDetailModal._id)
                        }
                        >Edit</button>


                    </Col>
                    <Col md="6">

                    </Col>
                </Row>






            </Modal>
        );
    }
    const renderSearchDetailsModal = () => {

        if (!searchresult) {
            return null;
        }
        console.log('dewnnn');
        return (
            <Modal
                show={searchresult}
                handleClose={handleCloseSearchDetailsModal}
                modalTitle={'Your Seach Result'}
                size="lg"

            >
                <Row>
                    <Input
                        label="Name"
                        value={name}
                        placeholder={searchresult.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        label="Name"
                        value={email}
                        placeholder={searchresult.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Name"
                        value={Studentclass}
                        placeholder={searchresult.Studentclass}
                        onChange={(e) => setStudentclass(e.target.value)}
                    />
                    <Input
                        label="Name"
                        value={subject}
                        placeholder={searchresult.subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                     <Input
                        label="Year"
                        value={year}
                        placeholder={searchresult.year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                     <Input
                        label="Month"
                        value={month}
                        placeholder={searchresult.month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                    <Col md="6">
                        <button className="userListDel"
                        >Delete</button>
                        <button className="userListEdit" 
                        // onClick={e => submitProductForm(updateDetailModal._id)
                        // }
                        >Edit</button>


                    </Col>
                    <Col md="6">

                    </Col>
                </Row>






            </Modal>
        );
    }


   

    return (
        <Layout sidebar>
            <Container>
                
            <Row>
                    <Col >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3>Students In Institute</h3>
                            <dv>
                            <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search student id"
                                    name="s"
                                    onChange={(e) => setSearchid(e.target.value)}
                                />
                                <button className="userListSearch" type="submit" onClick={() => Searchresult(searchid)}>Search</button>
                            </dv>
                                
                           
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col >
                     
                         
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                    <th>Student ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Student class</th>
                        <th>Subject</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Action</th>
                        

                    </tr>
                    {/*  */}
                </thead>
                <tbody>{studentsininstitute.map((studentsininstitute, index) => (
                            <tr >
                                
                                <td onClick={() => showStudentDetailModal(studentsininstitute)}
                            key={studentsininstitute._id}>{studentsininstitute.studentId}</td>
                                <td>{studentsininstitute.name}</td>
                                <td>{studentsininstitute.email}</td>
                                <td>{studentsininstitute.Studentclass}</td>
                                <td>{studentsininstitute.subject}</td>
                                <td>{studentsininstitute.month}</td>
                                <td>{studentsininstitute.year}</td>
                                <td>
                                        {/* <DeleteOutline
                                      className="productListDelete"
                                      // onClick={() => handleDelete(params.row.id)}
                                    /> */}

                                        <button className="userListDel" onClick={() => DeleteDetailModal(studentsininstitute)}
                                        >Delete</button>


                                        <button className="userListEdit" onClick={() => UpdateDetailModal(studentsininstitute)}>Edit</button>
                                    </td>
                              

                            </tr>))}
                </tbody>
            </Table>
                           
                       

                    </Col>
                </Row>
                <Row>
                    <Col>
                       
                    </Col>

                </Row>
            </Container>
           
            {renderStudentDetailsModal()} 
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}
            

        </Layout>
    )
}

export default StudentinInstitute