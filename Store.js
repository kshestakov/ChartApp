import * as Redux from 'redux';
import createLogger from 'redux-logger';
import RootReducer from './reducers/RootReducer';
import Immutable from 'immutable';


const logger = createLogger({
    stateTransformer: (state) => {
        let newState = {};

        for (let i of Object.keys(state)) {
            if (Immutable.Iterable.isIterable(state[i])) {
                newState[i] = state[i].toJS();
            } else {
                newState[i] = state[i];
            }
        }

        return newState;
    } 
});

const Store = Redux.createStore(
    RootReducer,
    Redux.applyMiddleware(
        logger
    ),
);

export default Store;