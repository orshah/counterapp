import CounterApp from "./components/CounterApp/CounterApp";
import { useState } from "react";
import "./App.css";

function App() {
  const [myNum, setMyNum] = useState(0);
  const onClickHandlerPlus = () => {
    if (myNum + 10 <= 150) {
      setMyNum(myNum + 10);
    }
  };
  const onClickHandlerMinus = () => {
    if (myNum - 10 >= 0) {
      setMyNum(myNum - 10);
    }
  };
  const onClickHandlerReset = () => {
    setMyNum(0);
  };
  const onClickHandlerDivide = () => {
    if (myNum / 5 >= 1) {
      setMyNum(myNum / 5);
    }
  };
  const onClickHandlerMultiply = () => {
    if (myNum * 5 <= 1000) {
      setMyNum(myNum * 5);
    }
  };

  return (
    <>
      <h1>{myNum}</h1>
      <div className="container">
        <CounterApp type="plus" text="+10" handleClick={onClickHandlerPlus} />
        <CounterApp type="minus" text="-10" handleClick={onClickHandlerMinus} />
        <CounterApp
          type="reset"
          text="Reset"
          handleClick={onClickHandlerReset}
        />
        <CounterApp
          type="division"
          text="Divide by 5"
          handleClick={onClickHandlerDivide}
        />
        <CounterApp
          type="multiplication"
          text="Multiply by 5"
          handleClick={onClickHandlerMultiply}
        />
      </div>
    </>
  );
}

export default App;
