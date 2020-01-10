import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

console.log('in reducer file.');
const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  console.log('in reducer', state, action)
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === DELETE_ARTICLE) {
    console.log('in delete reducers', state.articles);
    return Object.assign({}, state, {
      articles: (state.articles).filter(article => article.title !== action.payload)
    });
  }
  return state;
}

export default rootReducer;
