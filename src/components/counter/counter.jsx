import { useState } from 'react';

function Counter(props) {
  // let counterValue = 0
  const [counterValue, setCounterValue] = useState(props.startValue || 0);

  function handleCounterIncrement() {
    // counterUp(props.id, 5);
    setCounterValue((prevState) => prevState + 1);
  }
  const handleCounterDecrement = () => {
    // if (counterValue <= 0) {
    //   return;
    // }
    setCounterValue((prevState) => prevState - 1);
  };

  const isCounterPositive = counterValue > 0;
  // parasyti funkcija handleCounterChange() kuri mazina arba didina counterValue 1

  // handleCounterIncrement() infinite loop

  return (
    <div className="counter">
      <h3>{props.title} Counter</h3>
      <h2>{counterValue}</h2>
      <div className="control">
        <button onClick={handleCounterIncrement} className="btn">
          plus
        </button>
        {isCounterPositive && (
          <button
            // disabled={!isCounterPositive}
            onClick={handleCounterDecrement}
            className="btn"
          >
            minus
          </button>
        )}
      </div>
    </div>
  );
}

export default Counter;
