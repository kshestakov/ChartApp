let itemArray = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            return [...state, { title: action.payload, value: 0}];

        case 'VOTE':
            let newState = [...state];
            newState[action.payload].value++;
            return newState;

        default:
            return state;   
    }
};

export default itemArray;