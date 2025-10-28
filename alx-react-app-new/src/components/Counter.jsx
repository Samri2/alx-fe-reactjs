import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid gray', padding: '20px', textAlign: 'center', margin: '20px' }}>
      <h2>Simple Counter</h2>
      <p>Current Count: <span style={{ fontWeight: 'bold' }}>{count}</span></p>
      <button style={{ margin: '5px' }} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={{ margin: '5px' }} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={{ margin: '5px' }} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
