import { createSlice } from '@reduxjs/toolkit'



const Userslice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {

        adduser(state, action) {
            state.push(action.payload)
            console.log(action.payload);
        },

        removeuser(state, action) {
            //  console.log("hii "+action.payload)
            state.splice(action.payload,1)
        },
        clearusers(state, action) { 
            return [];
        },
    },

});



console.log(Userslice.actions)
export default Userslice.reducer;
export const { adduser, removeuser, clearusers } = Userslice.actions

