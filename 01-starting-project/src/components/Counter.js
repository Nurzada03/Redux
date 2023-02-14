import classes from "./Counter.module.css";

import { useDispatch, useSelector } from "react-redux";
import { calculatorActionTypes } from "../store/calculator/calculatorReduser";
const Calculator = () => {
  const result = useSelector((state) => state.calculator.result);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({ type: calculatorActionTypes.ADD, payload: 5 });
  };

  const subtractHandler = () => {
    dispatch({ type: calculatorActionTypes.SUBTRACT, payload: 10 });
  };

  const divideHandler = () => {
    dispatch({ type: calculatorActionTypes.DIVIDE, payload: 4 });
  };

  const multiplyHandler = () => {
    dispatch({ type: calculatorActionTypes.MULTIPLY, payload: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Calculator</h1>
      <div className={classes.value}>Result: {result}</div>
      <button onClick={addHandler}>+5 </button>
      <button onClick={subtractHandler}>-10 </button>
      <button onClick={divideHandler}>/ 4 </button>
      <button onClick={multiplyHandler}>*2</button>
    </main>
  );
};

export default Calculator;
