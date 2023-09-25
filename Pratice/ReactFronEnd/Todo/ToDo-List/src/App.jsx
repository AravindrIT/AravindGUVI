import { useState } from 'react'
import './App.css'
import TodoList from './Components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Task from './modals/Task';

function App() {
    return (
    <>
    <div className='App'>
      <TodoList />
      
    </div>
    </>
  )
}

export default App
