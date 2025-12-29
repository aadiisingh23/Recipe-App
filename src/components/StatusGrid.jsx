import React from "react";
import { Zap } from "lucide-react";
import { CircleCheckBig } from "lucide-react";
const StatusGrid = () => {
  let completedTodo = 2;
  let TotalTodo = 4;
  let activeTodo = TotalTodo - completedTodo;
  return (
    <div className="max-w-3xl mx-auto py-2 grid gap-4 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] text-center mb-4">
      <div className="backdrop-blur-2xl bg-linear-to-br from=violet-500/20 to-purple/20 border border-white/10 rounded-2xl  shadow-xl  p-3 hover:scale-105 duration-300">
        <div className="flex  gap-3 items-center mb-2">
          <Zap size={20} className="text-violet-400" />
          <span className="text-md font-semibold">Total</span>
        </div>
        <div className="text-3xl font-bold text-left">{TotalTodo}</div>
      </div>

      <div className="backdrop-blur-2xl bg-linear-to-br from=violet-500/20 to-purple/20 border border-white/10 rounded-2xl  shadow-xl  p-3 hover:scale-105 duration-300">
        <div className="flex  gap-3 items-center mb-2">
          {/* <Zap size={20} className="text-violet-400"/> */}
          <div className="w-4 h-4 border-2 border-violet-400 rounded-full"></div>
          <span className="text-md font-semibold">Active</span>
        </div>
        <div className="text-3xl font-bold text-left">{activeTodo}</div>
      </div>

      <div className="backdrop-blur-2xl bg-linear-to-br from=violet-500/20 to-purple/20 border border-white/10 rounded-2xl  shadow-xl  p-3 hover:scale-105 duration-300">
        <div className="flex  gap-3 items-center mb-2">
          <CircleCheckBig size={20} className="text-violet-500" />
          <span className="text-md font-semibold">Completed</span>
        </div>
        <div className="text-3xl font-bold text-left">{completedTodo}</div>
      </div>
    </div>
  );
};

export default StatusGrid;
