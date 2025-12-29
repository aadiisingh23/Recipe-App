import React from "react";
import { Plus } from "lucide-react";
const Input = () => {
  let value;
  let onChange;
  let onAdd;
  let onKeyPress;
  return (
    <>
      <div className="w-full backdrop-blur-3xl bg-white/5 border border-white/10 px-3 py-2 rounded-2xl  mb-4 hover:bg-white/10 transition-all duration-300">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="What is in Your Mind? "
            value={value}
            onChange={onChange}
            onKeyDown={onKeyPress}
            className="flex-1 outline-0 bg-white/10 placeholder-white/40  rounded-xl p-2 text-white focus:none focus:ring-2 focus:ring-violet-500/90 border border-white/30"
      />
          <button className="px-3 py-1 rounded-lg bg-blue-500 flex gap-1   justify-center items-center cursor-pointer font-semibold hover:shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-105" onClick={onAdd}>
            <Plus className="h-5 w-5 text-white" /> 
            <span>Add</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
