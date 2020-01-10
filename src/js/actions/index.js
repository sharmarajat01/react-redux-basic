import { ADD_ARTICLE, DELETE_ARTICLE } from "../constants/action-types";

console.log('in action file.');
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function deleteArticle(payload) {
  return { type: DELETE_ARTICLE, payload }
}
