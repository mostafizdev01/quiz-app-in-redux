import { Outlet } from "react-router"
import Navbar from "./components/ui/navbar/navbar"
import { useAppSelector } from "./redux/middlewares/hook"
import { selectTask } from "./redux/features/task/taskSlice";
import TaskCard from "./redux/features/task/taskCard";
import { Button } from "./components/ui/button";
import AddTaskModal from "./redux/features/task/AddTaskModal";

export default function App() {
  const tasks = useAppSelector(selectTask)
  console.log(tasks);

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-4 container gap-5 mx-auto mt-30">
        <div className=" col-span-4 flex justify-between">
          <span>Task</span>
          <div className="flex gap-3">
            <Button variant={"outline"}>Filter</Button>
            <AddTaskModal />
          </div>
        </div>
        {
          tasks.map((task)=> <TaskCard key={task.id} task={task} />)
        }
        
      </div>
      <div className="container mx-auto"><Outlet /></div>
    </>
  )
}
