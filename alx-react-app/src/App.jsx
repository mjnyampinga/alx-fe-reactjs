// src/App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// ✅ point to the components folder (with .jsx extension)
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

// Optional extra component you made earlier
import WelcomeMessage from './components/WelcomeMessage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* === ALX required components (order matters) === */}
      <Header />
      <MainContent />
      <Footer />

      {/* === Your existing Vite demo UI (kept intact) === */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* Optional task-1 component */}
      <main style={{ marginTop: '1rem' }}>
        <WelcomeMessage />
      </main>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
