import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/Reducer'


export default function TodoForm(){
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newItem, setItem] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type:'ADD', payload:newItem.item});
      
    }

    const handleChanges = e => {
       setItem({
           [e.target.name]:e.target.value,
       });
    }

    const handleComplete = id => {
        dispatch({type:'COMPLETE', payload:id});
    }

    const handleClear = () => {
        dispatch({type:'CLEAR'});
    }

    console.log(state)
    return (
            <div>
                <form onSubmit={handleSubmit} onReset={handleClear}>
                    <label>Todo:</label>
                    <input type="text" name="item" onChange={handleChanges} />
                    <button type='submit'>Add</button>
                    <button type='reset'>Clear</button>
                </form>

                <div>
                    {
                        state.todos !== undefined && state.todos.map((item) => {
                        return (
                        <div key={item.id}>
                            <h1>{item.item}</h1>
                            <p>Completed: {`${item.completed}`}</p>
                            <button onClick={() => handleComplete(item.id)}> Mark Complete</button>
                        </div>
                        )})
                    }
                </div>
                

            </div>
        )
    }


