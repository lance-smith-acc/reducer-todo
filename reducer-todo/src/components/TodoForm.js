import React, {useState, useReducer} from 'react';
import {initialState, reducer} from '../reducers/Reducer'


export default function TodoForm(){
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newItem, setItem] = useState('') 

    function listCall(){
        return (
            state.map((item) => {
                    return (
                    <div key={item.id}>
                        <h1>{item.item}</h1>
                        <p>Completed: {`${item.completed}`}</p>
                        <button onClick={handleComplete}> Mark Complete</button>
                    </div>
                    )})
        )
    }


    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type:'ADD', payload:newItem});
        return listCall;
    }

    const handleChanges = e => {
       setItem({
           [e.target.name]:e.target.value,
           completed:false,
           id:Date.now()
       });
    }

    const handleComplete = e => {
        function markComplete(k){
            console.log(k)
            return k.completed = true;
        }
        dispatch({type:'COMPLETE', payload:markComplete(e)});
        console.log(state);
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
                    state.map((item) => {
                    return (
                    <div key={item.id}>
                        <h1>{item.item}</h1>
                        <p>Completed: {`${item.completed}`}</p>
                        <button type="button" onClick={() => handleComplete(item)}> Mark Complete</button>
                    </div>
                    )})
                
                }
            </div>
            

        </div>
    )

    
}

