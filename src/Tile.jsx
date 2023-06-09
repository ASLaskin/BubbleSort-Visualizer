//This is where the tiles will be created

import React from 'react';

export function Tile({ id }) {
  let tileClassName = '';
  if (parseInt(id) >= 1 && parseInt(id) <= 10) {
    tileClassName = 'tile test';
  }else if(parseInt(id) >= 11 && parseInt(id) <= 50){
    tileClassName = 'tile test2';
  }else if(parseInt(id) >= 51 && parseInt(id) <= 100){
    tileClassName = 'tile test3';
  }else if(parseInt(id) >= 101 && parseInt(id) <= 150){
    tileClassName = 'tile test4';
  }else if(parseInt(id) >= 151 && parseInt(id) <= 200){
    tileClassName = 'tile test5';
  }else if(parseInt(id) >= 201 && parseInt(id) <= 250){
    tileClassName = 'tile test6';
  }
  
  else{
    tileClassName = 'tile';
  }

  return (
    <div className={tileClassName} id={id}>{id}</div>
  );
}

