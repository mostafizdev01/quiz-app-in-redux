import { Outlet } from "react-router"
import Navbar from "./components/ui/navbar/navbar"
import { useAppSelector } from "./redux/middlewares/hook"
import { selectFilter, selectTask } from "./redux/features/task/taskSlice";
import TaskCard from "./redux/features/task/taskCard";

export default function App() {
  const tasks = useAppSelector(selectTask)
  const filter = useAppSelector(selectFilter)
  console.log(tasks);
  console.log(filter);

  return (
    <>
      <Navbar />
      <div className=" grid grid-cols-4 container gap-5 mx-auto mt-30">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
      <div className="container mx-auto"><Outlet /></div>
    </>
  )
}
