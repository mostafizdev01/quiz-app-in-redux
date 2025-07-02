import { configureStore } from "@reduxjs/toolkit"
import taskReducer from '../features/task/taskSlice'

export const store = configureStore({
    reducer: {
      tasks: taskReducer,  // connect to slice
    }
})


export type RootState = ReturnType<typeof store.getState>; // find type on slice data
export type AppDispatch = typeof store.dispatch;