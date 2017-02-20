import itemArray from './AddItem';
import counter from './Counter';
import * as Redux from 'redux';

const Root = Redux.combineReducers({
    itemArray,
    counter,
});

export default Root;