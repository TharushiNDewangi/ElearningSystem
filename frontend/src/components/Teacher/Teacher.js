
import React, { useState ,useEffect} from 'react'
import Layout from '../Layout'
import { DeleteOutline } from "@material-ui/icons";
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../UI/Input';
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import axios from "axios";
//import './style.css';
//create products function
const Teacher = (props) => {
    
    const [teacher, setTeacher] = useState([]);
    const [teacherDetailModal, setTeacherDetails] = useState(null);
    const [searchresult, setSearchresult] = useState(null);
    const [updateDetailModal, setupdateTeacherDetails] = useState(null);
    const [deleteDetailModal, setDeleteTeacherDetails] = useState(null);
    const [searchDetailModal, setSearchTeacherDetails] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactnumber, setContactnumber] = useState("");
    const [grade, setGrade] = useState("");
    const [subject, setSubject] = useState("");
    const [searchid, setSearchid] = useState("");

    const submitTeacherForm = (id) => {
        let data = {
            name:name,
            email: email,
            contactnumber:contactnumber,
            grade: grade,
            subject: subject
        }

        console.log(id);
        axios.put(`http://localhost:8065/api/teacher/edit/${id}`, data)
            .then(res => {
                alert("approved");
                console.log(data);
                console.log('added');
            })
        //dispatch(addProduct(form)).then(() => setShow(false));
    };
    const Searchresult = (id) => {
        let data = {
            teacherId: id,
        }
        
        console.log("id :");
        console.log(data);
        axios.post(`http://localhost:8065/api/teacher/search`,data)
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
        function getTeacher() {
            axios.get("http://localhost:8065/api/teachers/view").then((res) => {
                console.log(res.data.data);
                console.log("res.data");
                setTeacher(res.data.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getTeacher();
    }, [])
   
   
    const handleCloseTeacherDetailsModal = () => {
        setTeacherDetails(false);
    }

    
    const handleCloseUpdateDetailsModal = () => {
        setupdateTeacherDetails(false);
    }
    const handleCloseDeleteDetailsModal = () => {
        setDeleteTeacherDetails(false);
    }
    const handleCloseSearchDetailsModal = () => {
        setSearchTeacherDetails(false);
    }
    //show product detail modal
    const showTeacherDetailModal = (teacher) => {

        setTeacherDetails(teacher);
        //setProductDetailModal(true);
        console.log('nnn'+teacher);

    }
    const UpdateDetailModal = (teacher) => {

        setupdateTeacherDetails(teacher);
        //setProductDetailModal(true);
        console.log('nnn' + teacher);

    }
    const DeleteDetailModal = (teacher) => {

        setDeleteTeacherDetails(teacher);
        //setProductDetailModal(true);
        console.log('nnn' + teacher);

    }
    const SearchDetailModal = (teacher) => {

        setSearchTeacherDetails(teacher);
        //setProductDetailModal(true);
        console.log('nnn' + teacher);

    }
    const renderTeacherDetailsModal = () => {

        if (!teacherDetailModal) {
            return null;
        }
        console.log('nnn');

        
       return (
            <Modal
                show={teacherDetailModal}
                handleClose={handleCloseTeacherDetailsModal}
                modalTitle={'Workshop Details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="key">{teacherDetailModal.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{teacherDetailModal.email}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">contactnumber</label>
                        <p className="key">{teacherDetailModal.contactnumber}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">TeacherId</label>
                        <p className="key">{teacherDetailModal.teacherId}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Grade</label>
                        <p className="key">{teacherDetailModal.grade}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">subject</label>
                        <p className="key">{teacherDetailModal.subject}</p>
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
                modalTitle={'Delete Classfees'}
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
                    <Col md="6">
                        <label className="key">contactnumber</label>
                        <p className="key">{deleteDetailModal.contactnumber}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">teacherID</label>
                        <p className="key">{deleteDetailModal.teacherId}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Grade</label>
                        <p className="key">{deleteDetailModal.grade}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Subject</label>
                        <p className="key">{deleteDetailModal.subject}</p>
                    </Col>

                </Row>
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/teacher/delete/${deleteDetailModal._id}`)
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
                modalTitle={'Workshop Details'}
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
                        label="contactnumber"
                        value={contactnumber}
                        placeholder={updateDetailModal.contactnumber}
                        onChange={(e) => setContactnumber(e.target.value)}
                    />
                    <Input
                        label="grade"
                        value={grade}
                        placeholder={updateDetailModal.grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <Input
                        label="Subject"
                        value={subject}
                        placeholder={updateDetailModal.subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <Col md="6">
                        <button className="userListDel"
                        >Delete</button>
                        <button className="userListEdit" onClick={e => submitTeacherForm(updateDetailModal._id)
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
                        label="Email"
                        value={email}
                        placeholder={searchresult.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                     <Input
                        label="contactnumber"
                        value={contactnumber}
                        placeholder={updateDetailModal.contactnumber}
                        onChange={(e) => setContactnumber(e.target.value)}
                    />
                    <Input
                        label="Grade"
                        value={grade}
                        placeholder={searchresult.grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                    <Input
                        label="subject"
                        value={subject}
                        placeholder={searchresult.subject}
                        onChange={(e) => setSubject(e.target.value)}
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
                        <h6>Teacher details</h6>
                            <dv>
                            <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search Fees id"
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
                     
                            <h3>Teacher In Institute</h3>
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        
                        <th>Name</th>
                        <th>Email</th>
                        <th>Teacher ID</th>
                        <th>contact Number</th>
                        <th>Grade</th>
                        <th>Subject</th>
                        <th>Action</th>
                        

                    </tr>
                    {/*  */}
                </thead>
                <tbody>{teacher.map((teacher, index) => (
                            <tr >
                                
                                <td onClick={() => showTeacherDetailModal(teacher)}
                            key={teacher._id}>{teacher.name}</td>
                                <td>{teacher.email}</td>
                                <td>{teacher.teacherId}</td>
                                <td>{teacher.contactnumber}</td>
                                <td>{teacher.grade}</td>
                                <td>{teacher.subject}</td>
                                <td>
                                        {/* <DeleteOutline
                                      className="productListDelete"
                                      // onClick={() => handleDelete(params.row.id)}
                                    /> */}

                                        <button className="userListDel" onClick={() => DeleteDetailModal(teacher)}
                                        >Delete</button>


                                        <button className="userListEdit" onClick={() => UpdateDetailModal(teacher)}>Edit</button>
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
           
            {renderTeacherDetailsModal()} 
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}
            

        </Layout>
    )
}

export default Teacher