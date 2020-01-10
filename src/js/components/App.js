import React from "react";
import List from "./List";
import Form from "./Form";
console.log('in app file.')


const App = (props) => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
  </>
);

export default App;
