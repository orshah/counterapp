import "./counterButton.style.css";

const CounterButton = ({ text, type, handleClick }) => {
  return (
    <button className={type} onClick={handleClick}>
      {text}
    </button>
  );
};
export default CounterButton;
