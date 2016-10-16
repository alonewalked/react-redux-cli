import { 
    createStore, 
    applyMiddleware, 
    bindActionCreators, 
    combineReducers 
} from 'redux';

import thunk from 'redux-thunk';

import { listReducer } from './reducers';

import { add, fetch } from './actions';

let reducers = combineReducers({ listReducer });

export function mapStateToPropsList(state) {
    return {
        "lists": state.listReducer.lists
    }
}

export function mapDispatchToPropsList(dispatch){
    return{
        actions : bindActionCreators({ fetch },dispatch)
    }
}

export function configureStore(initialState) {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(thunk));
    return store;
}