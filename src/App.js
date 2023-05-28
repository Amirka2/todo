import './App.css';
import Header from "./components/Header";
import Item_adder from "./components/Item_adder";

function App() {
  return (
    <div className="App">
      <Header/>
        <Item_adder/>
        <Item_adder/>
        <Item_adder/>
    </div>
  );
}

export default App;
