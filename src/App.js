import { useState } from 'react';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [toggle, setToggle] = useState(false);

  const AddItem = () => {
    let listCopy = [...items];
    listCopy.push(inputText)
    setItems(listCopy);
  }

  const deleteItem = (selectedIndex) => {
    let listCopy = [...items];
    listCopy.splice(selectedIndex, 1);
    setItems(listCopy)
  }

  const crossItem = inputText => {
    setToggle(!toggle)    

    if (inputText.target.parentElement.style.textDecoration === "line-through") {
      inputText.target.parentElement.style.setProperty(`text-decoration`, "none");
    } else {
      inputText.target.parentElement.style.setProperty('text-decoration', 'line-through');
    }
  }

  return (

    <div className="App">
      <h1>My ToDo List</h1>
      
      <div className="addItem">
        <input className="inputBox" type="text" placeholder='Add to list' value={inputText} onChange={(event) => setInputText(event.target.value)} ></input>
        <button className="addButton" onClick={AddItem}>Add</button>
      </div>

      <div className="items">
          {items.map((item, index) => {
            return (
              <div className="eachItem">
                <h4 key={index}>{item}</h4>
                <button className="button" onClick={crossItem}>Done?</button>
                <button className="button" onClick={() => deleteItem(index)}>Remove</button>
              </div>
            )
          })}
      </div>

    </div>
    
  )

}

export default App;