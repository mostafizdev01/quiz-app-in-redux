import { Outlet } from "react-router"
import Navbar from "./components/ui/navbar/navbar"
import AddTaskModal from "./redux/features/task/AddTaskModal";
import AddUserModal from "./redux/features/user/AddUserModal.js"
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { useGetTasksQuery } from "./redux/api/baseApi.js";
import TaskCard from "./redux/features/task/taskCard.js";
import type { ITask } from "./types.js";

export default function App() {
  // const tasks = useAppSelector(selectTask)
  // const disPatch = useAppDispatch()
  const {data, isError, isLoading} = useGetTasksQuery(undefined);

  console.log(data, isError, isLoading);
  
  if(isLoading){
    return <p>Loading...</p>
  }

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-4 container gap-5 mx-auto mt-30">
        <div className=" col-span-4 flex justify-between">
          <span>Task</span>
          <div className="flex gap-3">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="low">Low</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger  value="high">High</TabsTrigger>
              </TabsList>
            </Tabs>
            <AddTaskModal />
            <AddUserModal />
          </div>
        </div>
        {
          !isLoading && data.tasks.map((task: ITask, index: number) => <TaskCard key={index} task={task} />)
        }

      </div>
      <div className="container mx-auto"><Outlet /></div>
    </>
  )
}
