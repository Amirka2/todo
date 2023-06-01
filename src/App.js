import './App.css';
import Header from "./components/Header";
import ItemAdder from "./components/ItemAdder";
import {useState} from "react";
import Item from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState(0);

  const printItems = items.map((element, checked) => {
    return <Item text={element} checked={checked} changeCheckbox={changeCheckbox}/>;
  });

  function changeCheckbox(checked) {
    return !checked;
  }
  function addItem(itemText) {
    setItems([...items, itemText]);
  }
  return (
    <div className="App">
      <Header/>
      {printItems}
      <ItemAdder add={addItem}/>
    </div>
  );
}

export default App;
