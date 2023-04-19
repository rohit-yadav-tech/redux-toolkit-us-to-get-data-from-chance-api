import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { clearusers } from '../store/slices/userslice';
import { useDispatch } from 'react-redux';



const Clearuser = () => {

  const dispatch = useDispatch();

  const deleteUsers = () => {
      dispatch(clearusers())
  }
  return (<>

    <Container >

      <Button variant="danger" style={{ display: "block", margin: "auto" }} onClick={deleteUsers}>Delete button</Button>{' '}

    </Container>



  </>)
}

export default Clearuser;