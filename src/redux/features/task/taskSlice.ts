import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count: 0
}

const teskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export default teskSlice.reducer;