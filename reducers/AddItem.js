let addItem = (state = [], action) => {
    switch(action.type) {
        case 'ADD_NEW_ITEM':
            return [...state, { title: action.payload, value: 0}];
        default:
            return state;   
    }
};

export default addItem;