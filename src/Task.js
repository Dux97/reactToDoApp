const Task = (props) => {

    const {name,id, active} = props.task;
    if(active){
    return (
        
        <div className='task'>
            <p>
            <span><strong>{name}</strong> </span>
            <button onClick={()=>props.status(id)}>X</button>
            </p>
        </div> 
        )
    }
        else{
            return(
                <div  className='task'>
                    <p>
                        <span style={{textDecoration:'line-through'}}><strong>{name}</strong> </span>
                    </p>
            </div> 
            )
        }


}
 
export default Task;