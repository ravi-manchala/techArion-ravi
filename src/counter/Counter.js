import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Counter.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrmentHandler = () => {
    setCount(count + 3);
  };

  const decrementHandler = () => {
    setCount(count - 3);
  };
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.heading}>
            <h2>Counter</h2>
          </div>
          <div className={classes.btns}>
            <div className={classes.btn}>
              <button onClick={decrementHandler}>-</button>
            </div>
            <div className={classes.result}>
              <h3>{count}</h3>
            </div>
            <div className={classes.btn}>
              <button onClick={incrmentHandler}>+</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Counter;
