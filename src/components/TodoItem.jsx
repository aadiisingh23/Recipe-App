import React from "react";

import { Check, Save, X, Edit2, Trash2 } from "lucide-react";

const TodoItem = (props) => {
  const {
    todo,
    index,
    editingId,
    editText,
    onToggle,
    onStartEdit,
    onSaveEdit,
    onCancelEdit,
    onDelete,
    onEditTextChange,
    onEditKeyPress,
  } = props;

  const isEditing = editingId == todo.id;

  return (
    <>
      <div
        className={`group backdrop-blur-2xl bg-white/5 hover:bg-white/10 rounded-xl p-3 flex items-center gap-3 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 ${
          todo.completed ? "opacity-50" : ""
        }`}
        style={{
          animation: `slideIn 0.4s ease-out ${index * 0.05}s backwards`,
        }}
      >
        <button
          onClick={() => onToggle(todo.id)}
          className={`shrink w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            todo.completed
              ? "bg-linear-to-br from-emerald-400  to-teal-500 border-emerald-400 shadow-lg shadow-emerald-400/50"
              : "border-white/30 hover:border-violet-400 hover:bg-violet-500/20"
          }`}
        >
          {todo.completed && (
            <Check size={14} className="text-white font-bold" />
          )}
        </button>

        {isEditing ? (
          <>
            <input
              type="text"
              value={editText}
              onChange={onEditTextChange}
              onKeyDown={(e) => onEditKeyPress(e, todo.id)}
              className="flex-1 px-3 py-1.5  bg-white/10  outline-none text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 font-medium border-white/10"
            />
          </>
        ) : (
          <>
            <span
              className={`flex-1 font-medium text-sm duration-300 ${
                todo.completed ? "line-through text-white/40" : "text-white"
              }`}
            >
              {todo.text}
            </span> 
          </>
        )}
      </div>
    </>
  );
};

export default TodoItem;
