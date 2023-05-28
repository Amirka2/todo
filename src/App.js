import './App.css';
import Header from "./components/Header";
import ItemAdder from "./components/ItemAdder";

function App() {
  return (
    <div className="App">
      <Header/>
        <ItemAdder/>
        <ItemAdder/>
        <ItemAdder/>
    </div>
  );
}

export default App;
