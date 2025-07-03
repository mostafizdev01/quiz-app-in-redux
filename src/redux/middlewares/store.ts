import { configureStore } from "@reduxjs/toolkit"
import taskReducer from '../features/task/taskSlice'
import userReducer from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
      task: taskReducer,  // connect to slice
      user: userReducer
    }
})


export type RootState = ReturnType<typeof store.getState>; // find type on slice data
export type AppDispatch = typeof store.dispatch;