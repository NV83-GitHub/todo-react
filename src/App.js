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
const handleDeleteItem = (id) => {
  // Comme on ne modifie jamais un state directement je dois agie en 3 étapes

  //1.Copier le state
  const fruitsCopy = [...fruits]

  //2. Manipuler le state
  const fruitCopyUpdated = fruitsCopy.filter((fruit) => {
    return fruit.id !== id
  })

  //3. Updater le state avec le setter
  setFruits(fruitCopyUpdated)

} 
  // Rendering
  return (
    <div>
      <h1>Ma super liste de course</h1>
      <ul>{fruits.map((fruit) => {
        return (
          <li key={fruit.id}>{fruit.name}  <button onClick={() => handleDeleteItem(fruit.id)}>x</button></li>
        )
      })}</ul>
    </div>
    )
}

export default App