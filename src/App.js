import React, { useState } from 'react';
import appStyle from './App.css';
import Usefetch from './UseFetchHook';
class abc {
  constructor() {
    this.wheel = 1;
  }
}

class child extends abc {
  name(params) {
    var chair = params;
    console.log(chair)
  }
}

var obj = new child();
console.log(obj.wheel, obj.name(2));

const App = (props) => {
  console.log(appStyle, ' st5yle')
  const [state, setState] = useState({
    name: 'Dog',
    age: 24
  })

  const res = Usefetch('https://dog.ceo/api/breeds/image/random');
  if (!res.response) {
    return <div>Loading...</div>
  }

  const name = res.response.status;
  const imageUrl = res.response.message

  const changeValue = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setState({ [name]: value });
  }
  var abx = (temp) => {
    console.log('[func abx', temp);
  }

  return (
    <div className="App">
      <form>
        <h3>{name}</h3>
        <img src={imageUrl} alt='avatar' />
        <input
          type="text"
          name="name"
          onChange={(event) => changeValue(event)}
        />
        <button type='submit' style={appStyle.Custom}>Enter</button>

        <h3>{state.name}</h3>
      </form>
    </div>
  );
}


export default App;
