import { useState } from 'react';
//
//
function Counter() {
  const [counterValue, setCounterValue] = useState(0);

  function countPlusOne() {
    setCounterValue((prevCountVal) => prevCountVal + 1);
  }
  function countMinusOne() {
    setCounterValue((prevCountVal) => prevCountVal - 1);
  }
  function countPlusAndMinus() {
    setCounterValue((prevCountVal) =>
      prevCountVal > 0 ? prevCountVal - 1 : prevCountVal + 1
    );
  }
  //
  //disable mygtuka kai 0: disable={true}, tai rasai disable={counterValue===0}

  function countMinusCantBeNeg() {
    setCounterValue((prevCountVal) =>
      prevCountVal > 0 ? prevCountVal - 1 : alert('cant be minus')
    );
  }
  const isCounterPositive = counterValue > 0;

  return (
    <div className="counter">
      <h3>Counter</h3>
      <p className="error"></p>
      <h2 className={`${isCounterPositive ? 'green' : 'red'} `}>{counterValue}</h2>
      <div className="control">
        <button onClick={countPlusOne} className="btn">
          plus
        </button>
        <button onClick={countMinusOne} className="btn">
          minus
        </button>
        <button
          disabled={counterValue === 0}
          onClick={countMinusCantBeNeg}
          className="btn"
        >
          minus iki neig
        </button>
        <button onClick={countPlusAndMinus} className="btn">
          plius minus
        </button>

        {/* ==================== */}
        <button></button>
        {/* ==================== */}
      </div>
    </div>
  );
}
export default Counter;
