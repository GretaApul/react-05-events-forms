import { useState } from 'react';

import Counter from './Counter';

const initCounters = [
  { id: 1, title: 'Push ups', value: 0 },
  { id: 2, title: 'Sit ups', value: 0 },
  { id: 3, title: 'Bench pressups', value: 0, startValue: 5 },
];

function CounterList() {
  const [countersArr, setCountersArr] = useState(initCounters);

  function changeCounterValue(id, newValue) {}

  return (
    <div>
      <h2>The counters:</h2>
      <div className="grid">
        {countersArr.map((cOb) => (
          <Counter key={cOb.id} title={cOb.title} startValue={cOb.startValue} />
        ))}
      </div>
    </div>
  );
}

export default CounterList;
