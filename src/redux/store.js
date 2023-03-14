import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listReducer';
import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';
import searchStringReducer from './searchStringReducer';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;