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

  return (
    <>
      <h1>{myNum}</h1>
      <div className="container">
        <CounterApp type="plus" text="+" handleClick={onClickHandlerPlus} />
        <CounterApp type="minus" text="-" handleClick={onClickHandlerMinus} />
        <CounterApp
          type="reset"
          text="Reset"
          handleClick={onClickHandlerReset}
        />
      </div>
    </>
  );
}

export default App;
