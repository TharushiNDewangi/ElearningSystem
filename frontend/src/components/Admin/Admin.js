
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
const Admin = (props) => {
    
    const [admin, setAdmin] = useState([]);
    const [adminDetailModal, setAdminDetails] = useState(null);
    const [searchresult, setSearchresult] = useState(null);
    const [updateDetailModal, setupdateAdminDetails] = useState(null);
    const [deleteDetailModal, setDeleteAdminDetails] = useState(null);
    const [searchDetailModal, setSearchAdminDetails] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contactnumber, setContactnumber] = useState("");
    const [role, setRole] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [searchid, setSearchid] = useState("");

    const submitTeacherForm = (id) => {
        let data = {
            name:name,
            email: email,
            contactnumber:contactnumber,
            role: role,
            month: month,
            year:year
        }

        console.log(id);
        axios.put(`http://localhost:8065/api/admin/edit/${id}`, data)
            .then(res => {
                alert("approved");
                console.log(data);
                console.log('added');
            })
        //dispatch(addProduct(form)).then(() => setShow(false));
    };
    const Searchresult = (id) => {
        let data = {
            adminId: id,
        }
        
        console.log("id :");
        console.log(data);
        axios.post(`http://localhost:8065/api/admin/search`,data)
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
        function getAdmin() {
            axios.get("http://localhost:8065/api/admin/viewall").then((res) => {
                console.log(res.data.data);
                console.log("res.data");
                setAdmin(res.data.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getAdmin();
    }, [])
   
   
    const handleCloseTeacherDetailsModal = () => {
        setAdminDetails(false);
    }

    
    const handleCloseUpdateDetailsModal = () => {
        setupdateAdminDetails(false);
    }
    const handleCloseDeleteDetailsModal = () => {
        setDeleteAdminDetails(false);
    }
    const handleCloseSearchDetailsModal = () => {
        setSearchAdminDetails(false);
    }
    //show product detail modal
    const showAdminDetailModal = (admin) => {

        setAdminDetails(admin);
        //setProductDetailModal(true);
        console.log('nnn'+admin);

    }
    const UpdateDetailModal = (admin) => {

        setupdateAdminDetails(admin);
        //setProductDetailModal(true);
        console.log('nnn' + admin);

    }
    const DeleteDetailModal = (admin) => {

        setDeleteAdminDetails(admin);
        //setProductDetailModal(true);
        console.log('nnn' + admin);

    }
    const SearchDetailModal = (admin) => {

        setSearchAdminDetails(admin);
        //setProductDetailModal(true);
        console.log('nnn' + admin);

    }
    const renderAdminDetailsModal = () => {

        if (!adminDetailModal) {
            return null;
        }
        console.log('nnn');

        
       return (
            <Modal
                show={adminDetailModal}
                handleClose={handleCloseTeacherDetailsModal}
                modalTitle={'Workshop Details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Name</label>
                        <p className="key">{adminDetailModal.name}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{adminDetailModal.email}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">contactnumber</label>
                        <p className="key">{adminDetailModal.contactnumber}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">AdminId</label>
                        <p className="key">{adminDetailModal.adminId}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Role</label>
                        <p className="key">{adminDetailModal.role}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Month</label>
                        <p className="key">{adminDetailModal.month}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Year</label>
                        <p className="key">{adminDetailModal.year}</p>
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
                        <label className="key">AdminID</label>
                        <p className="key">{deleteDetailModal.adminId}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Role</label>
                        <p className="key">{deleteDetailModal.role}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Month</label>
                        <p className="key">{deleteDetailModal.month}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Year</label>
                        <p className="key">{deleteDetailModal.year}</p>
                    </Col>

                </Row>
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/admin/delete/${deleteDetailModal._id}`)
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
                        label="Role"
                        value={role}
                        placeholder={updateDetailModal.role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <Input
                        label="Month"
                        value={month}
                        placeholder={updateDetailModal.month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                     <Input
                        label="Year"
                        value={year}
                        placeholder={updateDetailModal.year}
                        onChange={(e) => setYear(e.target.value)}
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
                        label="Role"
                        value={role}
                        placeholder={searchresult.role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <Input
                        label="Month"
                        value={month}
                        placeholder={searchresult.month}
                        onChange={(e) => setMonth(e.target.value)}
                    />
                     <Input
                        label="Year"
                        value={year}
                        placeholder={searchresult.year}
                        onChange={(e) => setYear(e.target.value)}
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
                        <h6>Admin Details</h6>
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
                     
                            <h3>Admins In System</h3>
                            <Table style={{ fontsize: 12 }} responsive="sm">
                <thead>
                    <tr >
                        
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin ID</th>
                        <th>contact Number</th>
                        <th>Role</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Action</th>
                        

                    </tr>
                    {/*  */}
                </thead>
                <tbody>{admin.map((admin, index) => (
                            <tr >
                                
                                <td onClick={() => showAdminDetailModal(admin)}
                            key={admin._id}>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.adminId}</td>
                                <td>{admin.contactnumber}</td>
                                <td>{admin.role}</td>
                                <td>{admin.month}</td>
                                <td>{admin.year}</td>
                                <td>
                                        {/* <DeleteOutline
                                      className="productListDelete"
                                      // onClick={() => handleDelete(params.row.id)}
                                    /> */}

                                        <button className="userListDel" onClick={() => DeleteDetailModal(admin)}
                                        >Delete</button>


                                        <button className="userListEdit" onClick={() => UpdateDetailModal(admin)}>Edit</button>
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
           
            {renderAdminDetailsModal()} 
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}
            

        </Layout>
    )
}

export default Admin