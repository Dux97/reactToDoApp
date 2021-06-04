import React, {useState} from 'react';

const AddTask = (props) => {

    const [name, setName] = useState("")

    const handleChangeName =(e)=>{
        setName(e.target.value)
    }

    const handleAddTask = (e)=>{
        e.preventDefault();
        if(name.length> 2){
            props.createTask(name)
            setName("");
        }
        else{
            alert('Zadanie musi być dłuższe niż 2 znaki. ')
        }
    }

    return ( 
        <div>
            <h3>Add task.</h3>
            <div>
                <p>
                <input type="text" placeholder="input text" value={name} onChange={handleChangeName}/>
                <button onClick={handleAddTask}>ADD</button>
                </p>
            </div>
        </div>
     );
}
 
export default AddTask
