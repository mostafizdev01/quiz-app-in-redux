import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/redux/middlewares/hook";
import type { ITask } from "@/types";
import { Delete } from "lucide-react";
import { deleteTask, toggleCompleteState } from "./taskSlice";

interface IProps {
    task: ITask
}

export default function TaskCard({ task }: IProps) {

    const disPatch = useAppDispatch()

    const {id, title, description, priority } = task;


    return (
        <>
            <div className="border rounded-2xl p-4 flex items-center justify-between shadow-sm w-full max-w-md">
                {/* Left Side */}
                <div className=" flex  items-center gap-2">
                    <div className={cn("size-3 rounded-full", {
                       "bg-green-600" : priority === "high",
                       "bg-yellow-600" : priority === "medium",
                       "bg-red-600" : priority === "low",
                    })}></div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
                        <p className="text-sm  text-gray-800 dark:text-white">{description}</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-2">
                    <input onClick={() => disPatch(toggleCompleteState(id))}
                        type="checkbox"
                        className=" cursor-pointer appearance-none w-4 h-4 bg-transparent border border-gray-400 rounded-sm checked:bg-blue-500 checked:border-transparent focus:outline-none"
                    />

                    <button className="text-red-500 hover:text-red-700 cursor-pointer">
                        <Delete onClick={() => disPatch(deleteTask(id))} />
                    </button>
                </div>
            </div>

        </>
    )
}
