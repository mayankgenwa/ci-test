import { useState } from 'react';
import Login from './components/Login';
import { add } from './utils/math';
import './App.css'; // Optional, if you want default styling

function App() {
  const [count, setCount] = useState(0);

  // Uses the utility function we are testing in 'tests/math.test.js'
  const handleIncrement = () => {
    setCount((prev) => add(prev, 1));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <header>
        <h1>🤖 CI Agent Test Ground</h1>
        <p>
          If you can see this, the <strong>Build</strong> step passed.
        </p>
      </header>

      <hr />

      <main>
        <section style={{ marginBottom: '2rem' }}>
          <h3>Integration Check</h3>
          <p>Current Count: <strong>{count}</strong></p>
          <button onClick={handleIncrement}>
            Test Math Utility (Add 1)
          </button>
        </section>

        <section>
          <h3>Component Test</h3>
          <Login />
        </section>
      </main>
    </div>
  );
}

export default App;