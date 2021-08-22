
import React, { useState ,useEffect} from 'react'
import Layout from '../../components/Layout'
import { DeleteOutline } from "@material-ui/icons";
import { Container, Row, Col, Table } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct,deleteproductbyid,updateproductbyid } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';
import axios from "axios";

const AddTeacher = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [grade, setGrade] = useState('');
    const [subject, setsubject] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    
    function sendData(e){
        e.preventDefault();

        let data = {
            name:name,
            email:email,
            teacherId:teacherId,
            grade:grade,
            subject:subject,
            contactnumber:contactnumber

        }
        axios.post( 
            'http://localhost:8065/api/teacher/create',
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
        <span className="headerTitleLg">Add Teacher to Institute</span>
      </div>
      
    </div>


        <div className ="container">
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
                    <label for="teacherId">TeacherId</label>
                    <input type="text" className="form-control" id="teacherId"  placeholder="Enter teacherId" onChange={(e)=>{
                        setTeacherId(e.target.value);
                     }} />
                    
                </div>

                <div className="form-group">
                    <label for="teacherId">Contact Number</label>
                    <input type="text" className="form-control" id="contactnumber"  placeholder="Enter contactnumber" onChange={(e)=>{
                        setContactnumber(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="grade">Grade</label>
                    <input type="number" className="form-control" id="grade"  placeholder="Enter Grade" onChange={(e)=>{
                        setGrade(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="subject">Subject</label>
                    <input type="subject" className="form-control" id="subject"  placeholder="Enter Subject" onChange={(e)=>{
                        setsubject(e.target.value);
                     }} />
                    
                </div>
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
            </Container>
           
            

        </Layout>
    )
}

export default AddTeacher