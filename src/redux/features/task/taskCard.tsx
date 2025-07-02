import { Delete } from "lucide-react";

export default function TaskCard() {
    return (
        <>
            <div className="border rounded-2xl p-4 flex items-center justify-between shadow-sm w-full max-w-md">
                {/* Left Side */}
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Card Title</h3>
                    <p className="text-sm  text-gray-800 dark:text-white">This is the card description.</p>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-2">
                    <input className="" type="checkbox" name="" id="" />
                    <button className="text-red-500 hover:text-red-700">
                        <Delete />
                    </button>
                </div>
            </div>

        </>
    )
}
