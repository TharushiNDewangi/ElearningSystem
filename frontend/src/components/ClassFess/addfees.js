import React, { useState, useEffect, Component } from 'react'
import Layout from '../../components/Layout'
import { DeleteOutline } from "@material-ui/icons";
import { Container, Row, Col, Table, Form } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteproductbyid, updateproductbyid } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import axios from "axios";
import Select from 'react-select';
import Pdf from "react-to-pdf";
import './style.css';
const ref = React.createRef();


const initialState = {
    feesId: 0,
    email: '',
    amount: 0,
    year: '',
    month: '',
    subjects: [],
    options: [],
    selectedsub: [],
    classes: [],
    optionscl: [],
    selectedclass: []
}
class Addcourse extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubjectSelected = this.onSubjectSelected.bind(this);
        this.onClassSelected = this.onClassSelected.bind(this);
        this.state = initialState;
    }
    componentDidMount() {
        axios.get('http://localhost:8065/api/studentInstitute/viewall')
            .then(res => {
                this.setState({ subjects: res.data.data }, () => {
                    let data = [];
                    this.state.subjects.map((item, index) => {
                        let subject = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(subject)
                    });
                    this.setState({ options: data })
                })
            })
        axios.get('http://localhost:8065/api/classschedule/viewall')
            .then(res => {
                this.setState({ classes: res.data.data }, () => {
                    let data = [];

                    this.state.classes.map((item, index) => {
                        let classes = {
                            value: item._id,
                            label: item.ClassId
                        }
                        console.log("classes")
                        console.log(classes)
                        data.push(classes)
                    });
                    this.setState({ optionscl: data })
                })
            })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onClassSelected(e) {
        this.setState({ selectedclass: e ? e.map(item => item.value) : [] });
    }
    onSubjectSelected(e) {
        this.setState({ selectedsub: e ? e.map(item => item.value) : [] });
    }
    onSubmit(e) {
        e.preventDefault();
        let fees = {
            feesId: this.state.feesId,
            email: this.state.email,
            amount: this.state.amount,
            year: this.state.year,
            month: this.state.month,
            studentid: this.state.selectedsub,
            classid: this.state.selectedclass,

        };
        console.log(fees);
        axios.post('http://localhost:8065/api/classfees/create', fees)
            .then(res => {
                alert('added');
                console.log('res added');
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return (
            <Layout sidebar>


                <h2>
                    Add New Classfees
                </h2>
                <div className="container-form">
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label htmlFor="name">Fees ID</label>
                            <input
                                type="Number"
                                className="form-control"
                                id="feesId"
                                name="feesId"
                                value={this.state.feesId}
                                onChange={this.onChange} />

                        </div>
                        <label htmlFor="name">Student ID</label>
                        <Select
                            options={this.state.options}
                            onChange={this.onSubjectSelected}
                            className="basic-multi-select"
                            isMulti />

                        <label htmlFor="name">classes ID</label>
                        <Select
                            options={this.state.optionscl}
                            onChange={this.onClassSelected}
                            className="basic-multi-select"
                            isMulti />

                        <div class="form-group">
                            <label for="des">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <div class="form-group">
                            <label for="des">Amount</label>
                            <input type="Number"
                                className="form-control"
                                id="amount"
                                name="amount"
                                value={this.state.amount}
                                onChange={this.onChange}
                                placeholder="amount" />
                        </div>
                        <div class="form-group">
                            <label for="des">Month</label>
                            <input
                                type="text"
                                className="form-control"
                                id="des"
                                name="month"
                                placeholder="Enter Month"
                                value={this.state.month}
                                onChange={this.onChange}
                            />
                            <div class="form-group">
                                <label for="des">Year</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="des"
                                    name="year"
                                    placeholder="Enter Year"
                                    value={this.state.year}
                                    onChange={this.onChange}
                                /></div>
                        </div>




                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <div ref={ref}>
                        <h1>{this.state.feesId}</h1>
                        <p>{this.state.selectedsub}</p>
                        <p>{this.state.amount}</p>
                        <p>{this.state.email}</p>
                        <p>{this.state.month}</p>
                    </div>
                    <Pdf targetRef={ref} filename="recept.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
                    </Pdf>


                </div>




            </Layout>
        )
    }
}
export default Addcourse;