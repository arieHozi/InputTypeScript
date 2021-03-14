import React,{useState,useEffect} from 'react';
import './App.css';

import CustomInput from "./components/customInput/CustomInput";
import {InputType,UserRole} from "./components/customInput/CustomInput.interfaces";

function App() {

  const[userRole,setUserRole]=useState<string>(UserRole.ADMIN);

  useEffect(() => {
    setUserRole(UserRole.USER)
  }, [])

  const handleClick = (e: any) => {
    console.log("got click event", e.target.id);
  }

  const handleChange = (e: any) => {
    console.log("got change event", e.target.value);
  }

  const onChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setUserRole(e.target.value);

    
  }
  return (
    <div className="App">
      <div className="user-type">
      <h3>Select User Type:</h3>
      <select onChange={onChangeHandler} >
        <option value={UserRole.ADMIN}>Admin</option>
        <option value={UserRole.MANAGER}>Manager</option>
        <option value={UserRole.USER}>User</option>
      </select>
      </div>
      <div className='wrapper'>
        
      <CustomInput role={userRole} id="sdfsdf" placeholder="im a text input" onChange={handleChange}/><br/>
       {(userRole==='admin' || userRole==='manager') && <CustomInput role={userRole} id="sdfasd" type={InputType.COLOR}/>}
      {userRole==='manager' && <CustomInput role={userRole} id="hrty"  type={InputType.CHECKBOX} onChange={handleChange} checked disabled/>}
      {userRole==='manager' && <CustomInput role={userRole} id="sd"  type={InputType.BUTTON} onClick={handleClick} value="a button"/>}
      {(userRole==='admin' || userRole==='user') && <CustomInput role={userRole} id="numInput"  type={InputType.NUMBER} max={13} min={6}/>}
      {(userRole==='admin' || userRole==='manager') &&<CustomInput role={userRole} id="dateLocalInput"  type={InputType.DATETIME_LOCAL}/>}
      {(userRole==='admin' || userRole==='manager') &&<CustomInput role={userRole} id="dateInput"  type={InputType.DATE}/>}
      {(userRole==='admin' || userRole==='manager') &&<CustomInput role={userRole} id="rangeInput"  type={InputType.RANGE}/> }
      </div>
    </div>
  );
}

export default App;
