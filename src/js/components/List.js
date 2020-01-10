import React from "react";
import { connect } from "react-redux";
import { Delete } from "./deleteButton";
console.log('in list file.')

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
      <><li key={el.id}>{el.title}</li>
        <Delete key={el.id} data={el} /> </>
    ))}

  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
