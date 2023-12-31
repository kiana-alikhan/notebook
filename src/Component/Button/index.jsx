/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

export const Button = (props) => {
  const { children, onClick, backgroundColor, color, text } = props;
  return (
    <button onClick={onClick} style={{ color, backgroundColor }}>
      {children} {text}
    </button>
  );
};
