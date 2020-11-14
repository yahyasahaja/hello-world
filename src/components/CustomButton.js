import React, { Component } from 'react';

const CustomButton = ({onClick, children}) => {
  return (
    <button onClick={onClick} style={{background: 'white', padding: '10px 12px', border: '1px solid blue', borderRadius: '10px'}}>
      {children}
    </button>
  );
}

export default CustomButton;