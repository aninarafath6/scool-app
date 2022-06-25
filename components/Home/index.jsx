import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "@redux/slice/counter";

import Button from "@elements/button";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-1.5">
      <h1>Home</h1>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <div>{count}</div>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
