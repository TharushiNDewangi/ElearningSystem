
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
import { Select } from '@material-ui/core';

const AddAdmin = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [adminId, setAdminId] = useState('');
    const [role, setRole] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    
    function sendData(e){
        e.preventDefault();

        let data = {
            name:name,
            email:email,
            adminId:adminId,
            role:role,
            month:month,
            year:year,
            contactnumber:contactnumber

        }
        axios.post( 
            'http://localhost:8065/api/admin/create',
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
        <span className="headerTitleLg">Add Admin to System</span>
      </div>
      
    </div>


    <div className="container-form">
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
                    <label for="adminId">AdminId</label>
                    <input type="text" className="form-control" id="adminId"  placeholder="Enter adminId" onChange={(e)=>{
                        setAdminId(e.target.value);
                     }} />
                    
                </div>

                <div className="form-group">
                    <label for="teacherId">Contact Number</label>
                    <input type="text" className="form-control" id="contactnumber"  placeholder="Enter contactnumber" onChange={(e)=>{
                        setContactnumber(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="role">Admin Role</label>
                    <input type="text" className="form-control" id="role"  placeholder="Enter Admin Role" onChange={(e)=>{
                        setRole(e.target.value);
                     }} />
                    
                </div>
                <div className="form-group">
                    <label for="month">Month</label>
                    <Select type="text" className="form-control" id="month"  placeholder="Enter month" onChange={(e)=>{
                        setMonth(e.target.value);
                     }} >
                     <option value="none">None</option>
                     <option value="January">January</option>
                     <option value="February">February</option>
                     <option value="March">March</option>
                     <option value="April">April</option>
                     <option value="May">May</option>
                     <option value="June">June</option>
                     <option value="July">July</option>
                     <option value="August">August</option>
                     <option value="September">September</option>
                     <option value="October">October</option>
                     <option value="November">November</option>
                     <option value="December">December</option>
                     
                     </Select>
                    
                    
                </div>

             

                <div className="form-group">
                    <label for="year">Year</label>
                    <input type="text" className="form-control" id="year"  placeholder="Enter year" onChange={(e)=>{
                        setYear(e.target.value);
                     }} />
                    
                </div>
                
                
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
            </Container>
           
            

        </Layout>
    )
}

export default AddAdmin