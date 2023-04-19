import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillDelete } from "react-icons/ai";
import { removeuser } from '../store/slices/userslice';


const DisplayUsers = () => {
    const data = useSelector((state) => {
        return state.user;
    })

    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch(removeuser(id))
    }

    return (<>
        {
            data.map((user, id) => {
                return (
                    <li key={id} style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "2rem",
                        marginLeft: "-1rem",
                    }}>
                        {user}
                        <button style={{ color: "red", backgroundColor: "yellow" }} onClick={() => { deleteUser(id) }}><AiFillDelete /></button>
                    </li>
                )
            })
        }
    </>)
}

export default DisplayUsers;