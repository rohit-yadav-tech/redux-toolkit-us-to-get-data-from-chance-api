import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { fakeUserData } from '../Api';
import { useDispatch } from 'react-redux';
import { adduser } from '../store/slices/userslice';
import DisplayUsers from './DisplayUsers';

const Userdetail = () => {

  const dispatch = useDispatch();

  const addNewUser = (name) => {
    //console.log(name);
    dispatch(adduser(name));
  }


  return (<>
    
      <div style ={{display:"flex",justifyContent:"space-between"}}>
      <Row>
        <Col>list of user detail</Col>
      </Row>
      <Button variant="primary" onClick={() => addNewUser(fakeUserData())}>add new user</Button>
   </div>
   
    <ul>
    <DisplayUsers/>
    </ul>
  </>);
}

export default Userdetail;