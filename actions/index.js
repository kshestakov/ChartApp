export let addItem = (text) => ({
    type: 'ADD_NEW_ITEM',
    payload: text,
});

export let vote = (index) => ({
    type: 'VOTE',
    payload: index,
});