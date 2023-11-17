import { useState } from "react"

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);

    const addItem = () => {
        if(!inputData){

        }
        else{
            setItems([...items,inputData])
            setInputData('')
        }  
    }

    const deleteItem = (id) =>{
        const updatedItems = items.filter((elem, ind) =>{
            return ind !== id ;
        });
        setItems(updatedItems)
    }

  return (
    <div className="TodoWrapper">
        <h1>ToDo list</h1>
        <div className="TodoForm">
            <input className="todo-input" type="text" placeholder="enter a todo"
            value={inputData}
            onChange={(e)=> setInputData(e.target.value)}
            />
            <button className="todo-btn" onClick={addItem}>Add</button>
        </div>
        <div className="showItem">
            {
                items.map((Elem, ind)=>{
                    return(
                        // eslint-disable-next-line react/jsx-key
                        <div className="eachItem item" key={ind}>
                            <h3>{Elem}</h3>
                            <div className="cross" onClick={() => deleteItem(ind)}>X</div>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Todo