import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    users: [
        {
            name: "mostafiz",
            id: "adfaf455ds"
        }
    ]
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
       addUser: (state, action) => {
        const UserData = {
            ...action.payload,
            id: nanoid()
        }
        state.users.push(UserData)
       }
    }
})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;