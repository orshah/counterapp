import "./counterApp.style.css";

const CounterApp = ({ text, type, handleClick }) => {
  return (
    <button className={type} onClick={handleClick}>
      {text}
    </button>
  );
};

export default CounterApp;
