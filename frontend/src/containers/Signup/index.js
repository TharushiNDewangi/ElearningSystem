import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from '../../components/UI/Input';
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';


const Signup = (props) => {

    const [name, setName] = useState('');
    //const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const userSignup = (e) => {

    e.preventDefault();

        const user = {
            name, email, password
        }
        dispatch(signup(user));
    }

    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }

    if(user.loading){
        return <p>Loading....</p>
    }


    return (
        <Layout>
            <Container>
                {user.message}
                <Row style={{ marginTop: '50px' }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label=" Name"
                                        placeholder=" Name"
                                        value={name}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Col>
                                

                            </Row>
                            <Input
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />





                            <Button variant="primary" type="submit">
                                Submit
                      </Button>

                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )
}


export default Signup;