import { useState } from 'react';

export default function Counter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8, marginTop: 16 }}>
      <p style={{ marginBottom: 8 }}>Current Count: {count}</p>

      <button onClick={() => setCount((c) => c + step)} style={{ marginRight: 8 }}>
        Increment
      </button>

      <button onClick={() => setCount((c) => c - step)} style={{ marginRight: 8 }}>
        Decrement
      </button>

      <button onClick={() => setCount(initial)}>
        Reset
      </button>
    </div>
  );
}
