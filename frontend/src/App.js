import React, { useEffect } from 'react';
import { Route, Switch} from  'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getAllCategory} from './actions'

import ClassFees from './components/ClassFess/cfees';
import Salary from './components/Salary/salary';
import AddSalary from './components/Salary/Addsalary';
import AddClassFees from './components/ClassFess/addfees';
import { getInitialData } from './actions/initialData.action';
import AddStudentToInstitute from './components/Student/AddStudentToInstitute';
import StudentinInstitute from './components/Student/StudentsInInstitute';
import AddSchedule from './components/Schedule/AddSchedule';
import AllSchedule from './components/Schedule/AllSchedule';
import AddStudenttoclass from './components/Student/AddStudentToClass';
import StudentinClass from './components/Student/StudentInClass';
import AddAdmin from './components/Admin/AddAdmin';
import TeacherManagement from './components/Teacher/Teacher';
import AdminManagement from './components/Admin/Admin';
import TeacherAdd from './components/Teacher/TeacherAdd';


function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
     dispatch(isUserLoggedIn());
    }
    dispatch(getInitialData());
   
},[]);

  return (
    <div className="App">
     
       <Switch>
         <PrivateRoute path = "/" exact component ={ Home }/>
         <PrivateRoute path = "/classfees" exact component = {ClassFees}/>
         <PrivateRoute path = "/salary" exact component = {Salary}/>
         <PrivateRoute path = "/addsalary" exact component = {AddSalary}/>
         <PrivateRoute path = "/addclassfees" exact component = {AddClassFees}/>
         <PrivateRoute path = "/addstudenttoInstitute" exact component = {AddStudentToInstitute}/>
         <PrivateRoute path = "/viewstudentininstitute" exact component ={StudentinInstitute}/>
         <PrivateRoute path = "/addstudenttoClass" exact component = {AddStudenttoclass}/>
         <PrivateRoute path = "/viewstudentinClass" exact component = {StudentinClass}/>
	       <PrivateRoute path="/addschedule" exact component={AddSchedule} />
         <PrivateRoute path="/allschedule" exact component={AllSchedule} />
         <PrivateRoute path = "/addadmin" exact component = {AddAdmin}/>
         <PrivateRoute path = "/teachermanagement" exact component ={TeacherManagement}/>
         <PrivateRoute path = "/adminmanagement" exact component ={AdminManagement}/>
         <PrivateRoute path = "/addteacher" exact component ={TeacherAdd}/>
         <Route path = "/signin" component ={ Signin }/>
         <Route path = "/signup" component ={ Signup }/>
       </Switch>
     
      
    </div>
  );
}

export default App;
