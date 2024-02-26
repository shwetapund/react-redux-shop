import { createStore } from 'redux';
import reducers from './reducers/index';

const store = createStore(reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); //{} state empty state ...thier is no middleware

export default store;