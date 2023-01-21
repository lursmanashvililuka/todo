// eslint-disable-next-line
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import React,{useState} from 'react';
import './App.css';


function App() {
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);

    function addItem () {

      if (!newItem){
        alert('enter item')
        return;
      }

    const items ={
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, items]);
    setNewItem("");


    console.log(items);
}
    
  // eslint-disable-next-line 
      function deleteItem(id){
      const newArray = items.filter(items=>items.id !==id);
      setItems(newArray);
    }
  
    const [active, setActive] = useState(false);
    // eslint-disable-next-line
    const handleClick = () => {
      setActive(!active);
    };
    return (
   
    <div className='App'>
      <div className='todo'>
       <h1 >TO DO LIST</h1>
      <div>
        <input
        type='text'
        placeholder='add item'
        value={newItem}
        onChange = {e=> setNewItem(e.target.value)}
    
    /> 
       <button onClick={()=> addItem()} >add</button>
     </div>
      <ul>
        
        {
          items.map(items => {

            return(
 
              <li  key={items.id}>{items.value} <button className='x'   onClick={()=> deleteItem(items.id)}>❌</button><input type="checkbox"  /></li>

            )
          })
        }
      </ul>
      
      </div>
       

    </div>
  );
}

export default App;
