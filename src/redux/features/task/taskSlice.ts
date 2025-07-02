import type { RootState } from '@/redux/middlewares/store';
import type { ITask } from './../../../types';
import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from 'uuid';


interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
    tasks: [],
    filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" >;

const crateTask = (taskData : DraftTask) : ITask => {
    return {id: nanoid(), isCompleted: false, ...taskData}
}

const teskSlice = createSlice({
    name: "task",
    initialState,
    reducers: { /// how to works
        addTask: (state, action: PayloadAction<ITask>) => {

            const taskData = crateTask(action.payload)

            // way --02
            // const id = uuidv4();
            // const taskData = {
            //     ...action.payload,
            //     id,
            //     isCompleted: false
            // }
            state.tasks.push(taskData)
        }
    }
})

export const selectTask = (state: RootState) => { // set types and find task data in store
    return state.task.tasks
}

export const selectFilter = (state: RootState) => {
    return state.task.filter
}

export const { addTask } = teskSlice.actions

export default teskSlice.reducer;