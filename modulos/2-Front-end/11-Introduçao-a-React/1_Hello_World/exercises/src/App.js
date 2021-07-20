import './App.css';
import List from './components/task-list'

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arr = ['Dormir', 'Comer', 'Dormir mais']

function App() {
  return (
    <List items = {arr}/>

    // <ol>
    //   {arr.map((i) => Task(i))}
    // </ol>
  );
}

export default App;
