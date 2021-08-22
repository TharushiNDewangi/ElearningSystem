
import React, { useState } from 'react'
import Layout from '../../components/Layout'

import { Container,  } from 'react-bootstrap';

import axios from "axios";
import './style.css';
//create products function
const AddStudentToInstitute = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [studentId, setstudentId] = useState('');
    const [Studentclass, setStudentclass] = useState('');
    const [subject, setsubject] = useState('');
    const[year,setYear] = useState('');
    const[month,setMonth] = useState('');

    
   

    function sendData(e){
        e.preventDefault();
       
   

        let data = {
            name:name,
            email:email,
            studentId:studentId,
            Studentclass:Studentclass,
            subject:subject,
            year:year,
            month:month

        }
        axios.post( 
            'http://localhost:8065/api/studentInstitute/create',
            data,
           
          ).then(
              alert("successfully added"),
              console.log).catch(console.log)
              .catch(function (error) {
                console.log(error);

            });
          }
       
   

    return (
        <Layout sidebar>
            <Container>
            <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Add Student to Institute</span>
      </div>
      
    </div>


        <div className ="container-form">
            <form onSubmit ={sendData}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name"  placeholder="Enter Name"  onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                    
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="text" className="form-control" id="email"  placeholder="Enter email"onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
              
                    
                </div>
                <div className="form-group">
                    <label for="studentId">StudentId</label>
                    <input type="text" className="form-control" id="studentId"  placeholder="Enter StudentId" onChange={(e)=>{
                        setstudentId(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="Studentclass">Student class</label>
                    <input type="number" className="form-control" id="Studentclass"  placeholder="Enter Student class" onChange={(e)=>{
                        setStudentclass(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" className="form-control" id="subject"  placeholder="Enter Subject" onChange={(e)=>{
                        setsubject(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="year">Year</label>
                    <input type="text" className="form-control" id="year"  placeholder="Enter Year" onChange={(e)=>{
                        setYear(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="month">Month</label>
                    <input type="text" className="form-control" id="month"  placeholder="Enter Month" onChange={(e)=>{
                        setMonth(e.target.value);
                     }} />
                    
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
            </Container>
           
            

        </Layout>
    )
}

export default AddStudentToInstitute