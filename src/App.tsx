import List from "./List"
import './App.css';
import { people } from "./data";
import { useState } from "react";

function App() {
  const[person,setPerson]=useState(people)
  return (
    <main>
      <section className='container'>
        <h3>{people.length}  Birthdays today!</h3>
        <List />
        <button onClick={() => setPerson([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
