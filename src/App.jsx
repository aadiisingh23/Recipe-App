import React from 'react'
import AnimateBg from './components/AnimateBg'
import Notification from './components/Notification'
import Header from './components/Header'
import StatusGrid from './components/StatusGrid'
import Input from './components/Input'
import TodoList from './components/TodoList'
import ClearButton from './components/ClearButton'

const App = () => {
  return (
    <>
    <div className='min-h-screen w-full bg-linear-to-br from-indigo-900 via-purple-900 to-pink-950 p-3 sm:p-6 overflow-hidden text-white relative'>
      <AnimateBg/>
      <Notification/>

      <div className='max-w-3xl mx-auto  relative z-10'>
        <Header/>
        <StatusGrid/>
        <Input/>
        <TodoList/>
        <ClearButton/>
      </div>

    </div>
    </>
  )
}

export default App
