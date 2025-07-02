import { Outlet } from "react-router"
import Navbar from "./components/ui/navbar/navbar"
import { useAppSelector } from "./redux/middlewares/hook"
import { selectTask } from "./redux/features/task/taskSlice";

export default function App() {
  const tasks = useAppSelector(selectTask)
  console.log(tasks);
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto"><Outlet /></div>
    </>
  )
}
