import { createStore } from 'redux'
import initialState from './example.json';

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}
const devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(reducer, 
  devTool,
);

export default store;