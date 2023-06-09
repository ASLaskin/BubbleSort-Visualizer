import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import "./styles.css";
import { Header } from "./header";
import { Body } from "./body";
import { Footer } from './footer';

function App() {
  const [count, setCount] = useState(0);
  const bodyRef = useRef(null);
  var sorting = false;

  function handleShuffle() {
    if (bodyRef.current && !sorting) {
      bodyRef.current.shuffleTiles();

    }
  }

  function handleSort() {
    if (bodyRef.current) {
      sorting = true;
      bodyRef.current.sortTiles();
      sorting = false;
    }
  }

  return (
    <>
      <Header onSubmit={setCount} onShuffle={handleShuffle} onSort={handleSort}/>
      <Body ref={bodyRef} count={count} />
      <Footer />
    </>
  );
}

export default App;