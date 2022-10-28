import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    state: false
}

const navbarSlice = createSlice({
    name: 'navbarSlice',
    initialState,
    reducers: {
        setState: (state, action) => {

        }
    }
})


export const { setState } = navbarSlice.actions
export default navbarSlice.reducer
