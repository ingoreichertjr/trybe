import './App.css';
import List from './components/List'
import tarefas from './data'

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

function App() {
  return (
    <List items={tarefas} />

    // <ol>
    //   {arr.map((i) => Task(i))}
    // </ol>
  );
}

export default App;
