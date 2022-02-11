import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [angka, setAngka] = useState(0)
  const [text, setText] = useState('')
  const [arr, setArr] = useState([
    {
      id: 1,
      title: 'the title'
    }
  ])
  const [obj, setObj] = useState({
    name: 'Rudy Nurafif',
    age: 23
  })
  const add = () => setAngka(angka + 1)
  const minus = () => setAngka(angka - 1)
  
  return (
    <div>
      {angka}
      <button onClick={add}>tambah</button>
      <button onClick={minus}>kurang</button>
    </div>
  );
}

export default App;
