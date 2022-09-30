import { useState } from 'react';
import './App.css';

function App() {
  // States Data
const [fruits, setFruits] = useState([
  {id : 1 , name : "Abricot"},
  {id : 2 , name : "Bananes"},
  {id : 3 , name : "Fraises"},
])
  // Behaviour
  
  // Rendering
  return (
    <div>
      <h1>Ma super liste de course</h1>
      <ul>{}</ul>
    </div>
    )
}

export default App