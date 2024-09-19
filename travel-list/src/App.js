import "./App.css";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴Far Away 💼</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuatity] = useState(5);

  function handlesumbit(e) {
    e.preventDefault();

    if(!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
        
    setDescription('');
    setQuatity(1);
    console.log(newItem);
  }
  return (
    <form className="add-form" onSubmit={handlesumbit}>
      <h3>what do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuatity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item itme={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ itme }) {
  return (
    <li>
      <span style={itme.packed ? { textDecoration: "line-through" } : {}}>
        {itme.quantity}
        {itme.description}
        <button>❌</button>
      </span>
    </li>
  );
}
function Stats() {
  return (
    <footer>
      <em>you x amount of lagage </em>
    </footer>
  );
}

export default App;
