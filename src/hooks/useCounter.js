import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (num = 1) => {
    setCounter((current) => current + num);
  };

  const decrement = (num = 1) => {
    if(counter === 0) return
    setCounter((counter)=> counter - num);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
