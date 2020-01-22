import React, {useReducer, useEffect} from 'react'
import {initialState, reducer} from '../reducers/Reducer'

export default function TodoList() {

    const [state, dispatch] = useReducer(reducer, initialState);
   
    useEffect(() => {
        return (
            <div>
                {      state.map((item) => {
                        return (
                        <div key={item.id}>
                            <h1>{item.item}</h1>
                            <p>Completed: {`${item.completed}`}</p>
                        </div>
                    )})
                }

                </div>
        )
    },state)
       

}