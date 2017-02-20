let counter = (state = 0, action) => {
    switch(action.type) {
        case 'VOTE':
        let newState = state;
            return ++newState;

        default:
            return state;   
    }
};

export default counter;