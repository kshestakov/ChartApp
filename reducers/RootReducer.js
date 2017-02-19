import AddItem from './AddItem';
import * as Redux from 'redux';

const Root = Redux.combineReducers({
    itemArray: AddItem,
});

export default Root;