import React, { useState } from "react";

export function Header({ onSubmit, onShuffle,onSort }) {
  const [newNumber, setNewNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newNumber === "") return;

    onSubmit(parseInt(newNumber));
    setNewNumber("");
  }

  function handleInputChange(e) {
    setNewNumber(e.target.value);
  }

  function handleShuffle(e) {
    e.preventDefault();
    onShuffle();
  }

  function handleSort(e) {
    e.preventDefault();
    onSort();
  }

  return (
    <section className="header">
      <h1>Bubble Sort</h1>

      <form onSubmit={handleSubmit} className="buttons">
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="250"
          value={newNumber}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        <button className="shuffle" onClick={handleShuffle}>Shuffle</button>
        <button className="sort" onClick={handleSort}>Sort</button>
      </form>
    </section>
  );
}
