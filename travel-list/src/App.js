import "./App.css";

function App() {
  return (
    <div>
      <Logo/>
      <Form/>
      <PackingList/>
      <Stats/>
    </div>
  )
}

function Logo() {
  return <h1> 🌴Far Away 💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>what do you need for your trip?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list">list</div>;
}
function Stats() {
  return (
    <footer>
      <em>you x amount of lagage </em>
    </footer>
  );
}

export default App;
