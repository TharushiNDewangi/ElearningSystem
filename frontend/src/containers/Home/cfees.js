
import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import axios from "axios";
import './style.css';

const get = (props) => {


    const [workshops, setWorkshops] = useState([]);
    const [searchresult, setSearchresult] = useState(null);
    const [paperDetailModal, setProductDetails] = useState(null);
    const [updateDetailModal, setupdateDetails] = useState(null);
    const [deleteDetailModal, setDeleteDetails] = useState(null);
    const [searchDetailModal, setSearchDetails] = useState(null);
    

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [searchid, setSearchid] = useState("");
    const [clsses, setClass] = useState("");


    // const token = localStorage.getItem('token');
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };

    //console.log('user token'+config);
    const submitProductForm = (id) => {
        let data = {
            email: email,
            amount: amount,
            year: year,
            month: month
        }

        console.log(id);
        axios.put(`http://localhost:8065/api/classfees/edit/${id}`, data)
            .then(res => {
                alert("EDited");
                console.log(data);
                console.log('added');
            })
        //dispatch(addProduct(form)).then(() => setShow(false));
    };
    const Searchresult = (id) => {
        let data = {
            feesId: id,
        }

        console.log("id :");
        console.log(data);
        axios.post(`http://localhost:8065/api/classfees/sech`, data)
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
        function getWorkshops() {
            axios.get("http://localhost:8065/api/classfees/viewall").then((res) => {
                console.log(res.data.data);
                console.log("res.data");
                setWorkshops(res.data.data);
                console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getWorkshops();
    }, [])


    const handleCloseProductDetailsModal = () => {
        setProductDetails(false);
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
    const showProductDetailModal = (product) => {

        setProductDetails(product);
        //setProductDetailModal(true);
        console.log('dewww' + product);

    }
    const UpdateDetailModal = (product) => {

        setupdateDetails(product);
        //setProductDetailModal(true);
        console.log('nnn' + product);

    }
    const DeleteDetailModal = (product) => {

        setDeleteDetails(product);
        //setProductDetailModal(true);
        console.log('nnn' + product);

    }
    const SearchDetailModal = (product) => {

        setSearchDetails(product);
        //setProductDetailModal(true);
        console.log('nnn' + product);

    }

    const renderProductDetailsModal = () => {

        if (!paperDetailModal) {
            return null;
        }
        console.log('nnn');
        return (
            <Modal
                show={paperDetailModal}
                handleClose={handleCloseProductDetailsModal}
                modalTitle={'Classfees Details'}
                size="lg"

            >
                <Row>
                    <Col md="6">
                        <label className="key">Topic</label>
                        <p className="key">{paperDetailModal.email}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Description</label>
                        <p className="key">{paperDetailModal.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Date</label>
                        <p className="key">{paperDetailModal.yaer}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{paperDetailModal.month}</p>
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
                        <label className="key">Topic</label>
                        <p className="key">{deleteDetailModal.email}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Description</label>
                        <p className="key">{deleteDetailModal.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <label className="key">Date</label>
                        <p className="key">{deleteDetailModal.yaer}</p>
                    </Col>
                    <Col md="6">
                        <label className="key">Email</label>
                        <p className="key">{deleteDetailModal._id}</p>
                    </Col>

                </Row>
                <Row>
                    <Col md="6">
                        <button className="userListDel" onClick={e =>
                            axios.delete(`http://localhost:8065/api/classfees/del/${deleteDetailModal._id}`)
                                .then(res => {
                                    alert("Deleted");
                                    console.log('added');
                                })} >Delete</button>

                        <button className="userListEdit" >Cancel</button>


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
                modalTitle={'Update Classfees'}
                size="lg"

            >
                <Row>
                    <Input
                        label="Email"
                        value={email}
                        placeholder={updateDetailModal.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Amount"
                        value={amount}
                        placeholder={updateDetailModal.amount}
                        onChange={(e) => setAmount(e.target.value)}
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
                     </Row><Row>
                    <Col md="6">
                        <button className="userListDel" handleClose={handleCloseUpdateDetailsModal}
                        >Delete</button>
                        <button className="userListEdit" onClick={e => submitProductForm(updateDetailModal._id)
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
                        label="Email"
                        value={email}
                        placeholder={searchresult.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                   
                    <Input
                        label="Amount"
                        value={amount}
                        placeholder={searchresult.amount}
                        onChange={(e) => setAmount(e.target.value)}
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
                    </Row><Row>
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
                            <h3>Class Fees</h3>
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
                    <Col>
                        <Table style={{ fontsize: 12 }} responsive="sm">
                            <thead>
                                <tr >
                                    <th>Feesid</th>
                                    {/* <th>Studentid</th>
                                    <th>classid</th> */}
                                    <th>Email</th>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Amount</th>


                                </tr>
                                {/*  */}
                            </thead>
                            <tbody>{workshops.map((workshops, index) => (
                                <tr >

                                    <td onClick={() => showProductDetailModal(workshops)}
                                        key={workshops._id}>{workshops.feesId}</td>
                                    {/* {
                                        axios.get(`http://localhost:8065/api/classfees/getclass/${workshops.classid}`).then((res) => {
                                            console.log(res.data.data);
                                            setClass(res.data.data)
                                            console.log("res.data");
                                            
                                        }).catch((err) => {
                                            alert(err.message);
                                        })

                                    } */}

                                    {/* <td>{workshops.studentid}</td>
                                    <td>{workshops.classid}</td> */}
                                    {/* <td>{clsses}</td> */}
                                    <td>{workshops.email}</td>
                                    <td>{workshops.month}</td>
                                    <td>{workshops.year}</td>
                                    <td>{workshops.amount}</td>
                                    <td>
                                        {/* <DeleteOutline
                                      className="productListDelete"
                                      // onClick={() => handleDelete(params.row.id)}
                                    /> */}

                                        <button className="userListDel" onClick={() => DeleteDetailModal(workshops)}
                                        >Delete</button>


                                        <button className="userListEdit" onClick={() => UpdateDetailModal(workshops)}>Edit</button>
                                    </td>




                                </tr>))}
                            </tbody>
                        </Table>


                    </Col>

                </Row>
            </Container>

            {renderProductDetailsModal()}
            {renderUpdateDetailsModal()}
            {renderDeleteDetailsModal()}
            {renderSearchDetailsModal()}


        </Layout>
    )
}

export default Classfees