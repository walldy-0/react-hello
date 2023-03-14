import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;
export const getListById = ({lists}, listId) => lists.filter(list => list.id === listId)[0];
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = state => state.lists;
export const getSearchString = state => state.searchString;

// action creators
export const addList = payload => ({ type: 'ADD_LIST', payload });
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const searchCard = payload => ({ type: 'CHANGE_FILTER_CARDS', payload });


const reducer = (state, action) => {

  switch (action.type) {

    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { id: shortid(), ...action.payload }]};

    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};

    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { id: shortid(), ...action.payload }] };

    case 'CHANGE_FILTER_CARDS':
      return { ...state, searchString: action.payload };

      default:
        return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;