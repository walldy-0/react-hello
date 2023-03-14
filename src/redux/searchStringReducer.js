import shortid from "shortid";

//selectors
export const getSearchString = state => state.searchString;

//actions
const createActionName = actionName => `app/searchCards/${actionName}`;

const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

//action creators
export const searchCard = payload => ({ type: UPDATE_SEARCHSTRING, payload });

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer;