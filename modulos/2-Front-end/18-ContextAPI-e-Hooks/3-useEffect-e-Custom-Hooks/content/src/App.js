import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const number = Math.floor(Math.random() * 100)
      setNumber(number)
      if (number % 3 === 0 || number % 5 === 0) {
        setMsg('Acerto mizeravi');
        setTimeout(() => setMsg(''), 4000)
      }
    }, 10000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="App">
      <p>{number}</p>
      <p>{msg}</p>
    </div>
  );
}

export default App;
