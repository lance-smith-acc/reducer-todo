export const initialState = {
    todos: [
        {item: 'Learn about reducers',
            completed: false,
            id: 3892987589  
        },
        {
            item: 'Take over the world',
            completed: false,
            id: 3892987590
        },
        {
            item: 'Shower',
            completed: false,
            id: 3892987591
        },

    ]

}




export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            return {
             ...state, todos:[ ...state.todos, {item:action.payload, completed:false, id:Date.now()}]
            }
        case 'COMPLETE':
            return {
                ...state, todos:state.todos.map(todo => {
                    if(todo.id === action.payload){
                        return {...todo, completed:!todo.completed}
                    }
                    else{
                        return todo;
                    }
                })
            }
        case 'CLEAR':
            return {
                ...state, todos:state.todos.filter(item => item.completed !== true)
            }
        default:
            return state
    }
}