import React from 'react';

export default function RemainingCharacters({charCount}) {
  // <RemainingCharacters />
  let maxChars = 100;
  let remainingChars = maxChars - charCount;
  if (remainingChars <= 0) {
    return (<p style={{color: "red"}}>Characters left: {remainingChars}</p>);
  }
  return (<p>Characters left: {remainingChars}</p>);
}