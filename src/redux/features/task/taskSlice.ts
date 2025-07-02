import type { RootState } from '@/redux/middlewares/store';
import type { ITask } from './../../../types';
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    task: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
    task: [
        {
            id: "asdfasdfsdfg",
            title: "Initalalize frontend",
            description: "Createing home page and routing",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high",
        },
        {
            id: "sgfdghjkfdghj",
            title: "Initalalize Backend",
            description: "Createing Backend useing express Js",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "low",
        },
        {
            id: "asdfasdfhjkl",
            title: "Initalalize FullStack",
            description: "Learning FullStack web developments",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high",
        },
        {
            id: "asdfasdfsqwer",
            title: "Github Repositorys",
            description: "Creating github repository and git marge",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "medium",
        }
    ],
    filter: "all",
};

const teskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTask = (state: RootState) => { // set types and find task data in store
    return state.tasks.task
}

export const selectFilter = (state: RootState) => {
    return state.tasks.filter
}

export default teskSlice.reducer;