import CounterButton from "./components/CounterButton/CounterButton";
import img from "./images/police.avif";
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
        <CounterButton
          type="plus"
          text="+10"
          handleClick={onClickHandlerPlus}
        />
        <CounterButton
          type="minus"
          text="-10"
          handleClick={onClickHandlerMinus}
        />
        <CounterButton
          type="reset"
          text="Reset"
          handleClick={onClickHandlerReset}
        />
        <CounterButton
          type="division"
          text="Divide by 5"
          handleClick={onClickHandlerDivide}
        />
        <CounterButton
          type="multiplication"
          text="Multiply by 5"
          handleClick={onClickHandlerMultiply}
        />
      </div>
      {myNum > 50 && <img src={img} />}
    </>
  );
}

export default App;
