
import React from 'react';
import { useState } from 'react';

function Greeting() {
  const [name, setName] = useState('')

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={(e) => setName(e.target.value) } id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting />;
}

export default App;
