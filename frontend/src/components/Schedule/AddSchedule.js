import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Form, Row, Col } from 'react-bootstrap';
// import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
const AddSchedule = (props) => {
    const [hall, setHall] = useState('');
    const [teacher, setTeacher] = useState('');
    const [batch, setBatch] = useState('');
    const [day, setDay] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    // const [Toptions, setTOptions] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:8065/api/classschedule/teachers').then((res) => {
    //         setTOptions(
    //             res.data.Teachers.map((teacher) => {
    //                 return { value: teacher._id, label: teacher.name };
    //             })
    //         );
    //     });
    // }, []);

    function sendData(e) {
        e.preventDefault();

        let data = {
            ClassId: Math.floor(Math.random() * 100) + '-' + Math.floor(Math.random() * 100),
            hall: hall,
            teachername: teacher,
            Studentbatch: batch,
            day: day,
            starttime: start,
            endtime: end,
        };
        console.log(data);
        axios
            .post('http://localhost:8065/api/classschedule/create', data)
            .then((res) => {
                alert('data successfully inserted');
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <Layout sidebar>
            <h2>Add New Schedule</h2>

            <div className="container-form">
                <form onSubmit={sendData}>
                    <div className="form-group">
                        <label for="hall">Hall</label>
                        <Form.Control
                            as="select"
                            value={hall}
                            id="hall"
                            onChange={(e) => {
                                setHall(e.target.value);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="100A">100A</option>
                            <option value="200A">200A</option>
                            <option value="400A">400A</option>
                            <option value="400B">400B</option>
                            <option value="500A">500A</option>
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <label for="teacher">Teacher's Name</label>
                        <Form.Control
                            as="select"
                            value={teacher}
                            id="teacher"
                            onChange={(e) => {
                                setTeacher(e.target.value);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="D. Perera">D. Perera</option>
                            <option value="P. Kamal">P. Kamal</option>
                            <option value="K. Fernando">K. Fernando</option>
                            {/* {Toptions.map((teacher) => {
                                    return <option value={teacher.value}> {teacher.label} </option>;
                                })} */}
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <label for="studentBatch">Student Batch</label>
                        <Form.Control
                            as="select"
                            value={batch}
                            id="studentBatch"
                            onChange={(e) => {
                                setBatch(e.target.value);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="12A">12A</option>
                            <option value="12B">12B</option>
                            <option value="13A">13A</option>
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <label for="day">Day</label>
                        <Form.Control
                            as="select"
                            value={day}
                            id="day"
                            onChange={(e) => {
                                setDay(e.target.value);
                            }}
                        >
                            <option value="none">None</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday ">Saturday </option>
                            <option value="Sunday">Sunday</option>
                        </Form.Control>
                    </div>
                    <div className="form-group">
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <label for="start">Start Time</label>
                                <input
                                    type="subject"
                                    className="form-control"
                                    id="start"
                                    value={start}
                                    onChange={(e) => {
                                        setStart(e.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <label for="end">End Time</label>
                                <input
                                    type="subject"
                                    className="form-control"
                                    id="end"
                                    value={end}
                                    onChange={(e) => {
                                        setEnd(e.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Row>
                    </div>
                    <Row>
                        <Col xs="6">
                            <button type="submit" className="btn btn-primary">
                                Create Schedule
                            </button>
                        </Col>
                        <Col xs="6" className="text-right">
                            <Link to="/allschedule" color="link" className="px-0">
                                View Schedules
                            </Link>
                        </Col>
                    </Row>
                </form>
            </div>
        </Layout>
    );
};

export default AddSchedule;
