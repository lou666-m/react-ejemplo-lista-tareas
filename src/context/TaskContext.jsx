import { createContext, useState, useEffect } from "react";
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState(data) //Estado de las tareas

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description : task.description
    }]) //Copia todo el arreglo de tareas y añadele una nueva tarea
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task=>task.id !== taskId))
  }

  useEffect(()=>{
    setTasks(data)
}, [])

  return (
   <TaskContext.Provider value={{
    tasks,
    deleteTask,
    createTask
  }}>{props.children}</TaskContext.Provider>
  );
}

