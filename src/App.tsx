import { Outlet } from "react-router"
import Navbar from "./components/ui/navbar/navbar"
import { useAppDispatch, useAppSelector } from "./redux/middlewares/hook"
import { filterTask, selectTask } from "./redux/features/task/taskSlice";
import TaskCard from "./redux/features/task/taskCard";
import AddTaskModal from "./redux/features/task/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  const tasks = useAppSelector(selectTask)
  const disPatch = useAppDispatch()
  console.log(tasks);

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-4 container gap-5 mx-auto mt-30">
        <div className=" col-span-4 flex justify-between">
          <span>Task</span>
          <div className="flex gap-3">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger onClick={()=>disPatch(filterTask('all'))} value="all">All</TabsTrigger>
                <TabsTrigger onClick={()=>disPatch(filterTask('low'))} value="low">Low</TabsTrigger>
                <TabsTrigger onClick={()=>disPatch(filterTask('medium'))} value="medium">Medium</TabsTrigger>
                <TabsTrigger onClick={()=>disPatch(filterTask('high'))} value="high">High</TabsTrigger>
              </TabsList>
            </Tabs>
            <AddTaskModal />
          </div>
        </div>
        {
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        }

      </div>
      <div className="container mx-auto"><Outlet /></div>
    </>
  )
}
