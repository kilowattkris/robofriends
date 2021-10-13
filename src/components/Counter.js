import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {increment} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const incrementCount = () => {
    dispatch(increment());
  };

  return <button className="btn" onClick={incrementCount}>{`I've been clicked ${count} times`}</button>;
};

export default Counter;