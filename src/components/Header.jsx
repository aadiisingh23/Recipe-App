import React from "react";
import { Sparkles } from "lucide-react";
import { TrendingUp } from 'lucide-react';
const Header = () => {
  let Progress = 17; // Example progress value
  let TotalTasks = 10; // Example total tasks value
  return (
    <div className="backdrop-blur-2xl bg-white/5 border border-white/10 p-3 mb-4 shadow-2xl rounded-2xl">
      <div className="flex justify-between items-center p-3 ">
        {/* Left Header0 */} 
        <div className="flex gap-3 items-center relative"> 
          <div className="relative">
            <Sparkles className="h-10 w-10 text-white animate-flicker bg-blue-400 p-1 rounded-xl " />
             <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div> 
          </div>
         
          <div className="relative">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Task Flow
            </h1>
            <p className="text-sm text-gray-200">Productivity Reimagined</p>
          </div>
        </div>

      {/* Right Header */}
        <div className="flex items-center gap-2 backdrop-blur-3xl bg-white/5 border border-white/10 px-3 py-2 rounded-4xl">
          <TrendingUp className="h-5 w-5 text-green-400 animate-flicker" />
          <p className=""> <span className="font-bold">{TotalTasks}</span> Active</p>
        </div>
      </div>

      {/* Progress Bar */}

    <div className="relative">
    <div className="flex justify-between items-center p-2 mb-3">
      <span>Progress</span>
      <span>{Progress}% </span>
    </div>

    <div className="w-full bg-gray-700/90 rounded-full h-2.5 overflow-hidden">
      <div className="bg-blue-400 h-2.5 rounded-full animate-shimmer duration-700 ease-out" style={{ width: `${Progress}%` }}></div>
    </div>




    </div>





    </div>
  );
};

export default Header;
