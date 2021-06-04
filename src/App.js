import React, {useState} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';


function App() {

const [counter, setCounter] = useState(3)
const [tasks, setTasks] = useState([
  {
  id: 1,
  name: "Create todo app",
  active: true,
},
{
  id: 2,
  name: "Put project on github ",
  active: true,
}
])


const createTask=(name)=>{
  let newTask={
    id: counter,
    name,
    active: true,
  }
  setCounter(counter + 1); 

  setTasks([...tasks,newTask])
}

const handleChangeStatus=(id)=>{
  const quests = Array.from(tasks);
  quests.forEach(quest=>{
    if(quest.id===id){
      quest.active = false;
    }
  })
  setTasks(quests);
}



  return (
    <div className="App">
      <h1>TODO APP</h1>
      <AddTask createTask={createTask}/>
      <TaskList tasks = {tasks} status={handleChangeStatus} id={tasks.id}/>
    </div>
  );
}

export default App;
