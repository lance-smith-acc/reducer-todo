export const initialState = [
    {
        item: 'Learn about reducers',
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

];



export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': 
            return [...state, action.payload]
        case 'COMPLETE':
            return [...state, action.payload]
        case 'CLEAR':
            return {}
        default:
            return state
    }
}