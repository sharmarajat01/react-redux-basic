import React from 'react';
import { connect } from "react-redux";
import { deleteArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
    console.log('in delete dispatch', dispatch)
    return {
        deleteArticle: article => dispatch(deleteArticle(article))
    }
}

const deleteData = (data) => {
    data.deleteArticle(data.data.title)
    console.log('delete button clicked!', data);
}

const DeleteButton = (data) => <button onClick={() => deleteData(data)} type='button'>delete</button>

export const Delete = connect(
    null,
    mapDispatchToProps
)(DeleteButton);
