import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/Reducer'


export default function TodoForm(){
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newList, setNewList] = useState(initialState)
    const [newItem, setItem] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type:'ADD', payload:newItem});
        return setNewList(state);
    }

    const handleChanges = e => {
       setItem({
           [e.target.name]:e.target.value,
           completed:false,
           id:Date.now()
       });
    }


    const handleComplete = () => {
        dispatch({type:'COMPLETE'});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Todo:</label>
                <input type="text" name="item" onChange={handleChanges} />
                <button type='submit'>Add</button>
            </form>

            <div>
                {
                
                    newList.map(item => {
                    return (
                    <div key={item.id}>
                        <h1>{item.item}</h1>
                        <p>Completed: {`${item.completed}`}</p>
                        <button type="button" onClick={() => handleComplete}> Mark Complete</button>
                    </div>
                    )})
                
                }
            </div>
            

        </div>
    )

    
}

