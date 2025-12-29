import React from 'react'

const TodoItem = (props) => {
  const {todo, index, editingId, editText, onToggle, onStartEdit, onSaveEdit, onCancelEdit, onDelete, onEditTextChange, onEditKeyPress} = props;
  return (
  <div className={`group backdrop-blur-2xl bg-white/5 hover:bg-white/10 rounded-xl p-3 flex items-center gap-3 border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 ${todo.completed ? 'opacity-50' : ''}`} style={{
    animation:`slideIn 0.4s ease-out ${index * 0.05}}`}}>
      TodoItem
    </div>
  )
}

export default TodoItem
