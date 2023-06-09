import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import { Tile } from './Tile';

export const Body = forwardRef(({ count }, ref) => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const generatedTiles = [];
    for (let i = 0; i < count; i++) {
      generatedTiles.push(<Tile key={i} id={`${i+1}`} />);
    }
    setTiles(generatedTiles);
  }, [count]);
  
  useImperativeHandle(ref, () => ({
    shuffleTiles: () => {
      const shuffledTiles = [...tiles];
      for (let i = shuffledTiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
      }
      setTiles(shuffledTiles);
    },
    
    


    sortTiles: () => {
      const sortedTiles = [...tiles];
      let i = 0;
    
      const sortNextTile = () => {
        if (i < sortedTiles.length) {
          for (let j = 0; j < sortedTiles.length - i - 1; j++) {
            if (parseInt(sortedTiles[j].key) > parseInt(sortedTiles[j + 1].key)) {
              [sortedTiles[j], sortedTiles[j + 1]] = [sortedTiles[j + 1], sortedTiles[j]];
            }
          }
          setTiles([...sortedTiles]);
          i++;
          setTimeout(sortNextTile, 200);
        }
      };
    
      sortNextTile();
      setTiles(sortedTiles);
    },
    
  }));
  
  return (
    <div className="main-container">
      {tiles}
    </div>
  );
});
