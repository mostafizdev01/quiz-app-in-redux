import type { RootState } from '@/redux/middlewares/store';
import type { ITask } from './../../../types';
import { createSlice } from "@reduxjs/toolkit";


interface InitialState{
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
            id: "asdfasdfsqwer",
            title: "Github Repositorys",
            description: "Creating github repository and git marge",
            dueDate: "2025-11",
            isCompleted: false,
            priority: "high",
        }
    ],
    filter: "all",
};

const teskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
})

export const selectTask = (state: RootState) => {
    return state.tasks.task
}

export const selectFilter = (state: RootState) => {
    return state.tasks.filter
}

export default teskSlice.reducer;