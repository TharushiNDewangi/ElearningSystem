import React, { useState ,useEffect,Component} from 'react'
import Layout from '../../components/Layout'
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from "axios";
import Select from 'react-select';

import './style.css';
const initialState = {
    feesId: 0,
    email: '',
    amount:0, 
    year:'',
    month:'',
    subjects:[],
    options:[],
    selectedsub:[]
   
}
class AddSalary extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubjectSelected = this.onSubjectSelected.bind(this);
        this.state = initialState;
    }
    componentDidMount(){
        axios.get('http://localhost:8065/api/studentInstitute/viewall')
        .then(res => {
            this.setState({ subjects: res.data.data}, () => {
                let data=[];
                this.state.subjects.map((item,index) => {
                    let subject ={
                        value: item._id,
                        label: item.name
                    }
                    data.push(subject)
                });
                this.setState({ options:data})
            })
        })
       
    }
   onChange(e) {
     this.setState({ [e.target.name]: e.target.value } )}
     
     onSubjectSelected(e){
        this.setState({ selectedsub: e ? e.map(item => item.value) : []});
     }
    onSubmit(e) 
    {
        e.preventDefault();
        let course = {
            salaryId:this.state.feesId ,
            email: this.state.email,
            amount: this.state.amount,
            year: this.state.year, 
            month: this.state.month,
            studentid: this.state.selectedsub,
           
            
        } ;
        console.log(course);
        axios.post('http://localhost:8065/api/salary/create',course)
        .then(res=>{
            alert('Successfuly added');
            console.log('added');
        })
        .catch(err =>{
          console.log(err);
        })
    }
    render(){
        return(
            <Layout sidebar>
            
                <h2>
                    Add New Salary
                </h2>
                <div className="container-form">  
                <form onSubmit={this.onSubmit}>
  <div class="form-group">
    <label htmlFor="name">Slary ID</label>
    <input 
     type="Number"
     className="form-control" 
     id="feesId"
     name="feesId" 
     value={this.state.feesId}
     onChange={this.onChange}/>
   
  </div>
  <label htmlFor="name">Teacher ID</label>
  <Select
  options={this.state.options}
  onChange={this.onSubjectSelected}
  className="basic-multi-select"
  isMulti/>



  <div class="form-group">
    <label for="des">Email</label>
    <input 
     type="text" 
     className="form-control" 
     id="email" 
     name="email" 
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
     placeholder="amount"/>
  </div>
  <div class="form-group">
    <label for="des">Month</label>
    <input 
     type="text" 
     className="form-control" 
     id="des" 
     name="month" 
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
     value={this.state.year}
     onChange={this.onChange}
     /></div>
  </div>
  
  
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
             
               
            </div>
          
           
            

        </Layout>
        )
    }
}
export default AddSalary;