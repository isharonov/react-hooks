import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {

  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {

  const [ color, setColor ] = useState('gray');
  const [ fontSize, setFontSize] = useState(20);

  return (
    <div style={{ padding: '10px',
      backgroundColor: color,
      fontSize: `${fontSize}px`
    }}>
      <button
        onClick={() => setColor('gray')}>
        Dark
      </button>
      <button
        onClick={() => setColor('white')}>
        Light
      </button>
      <button
        onClick={() => setFontSize((s) => s + 2)}>
        +
      </button>
      <button
        onClick={() => setFontSize((s) => s - 2)}>
        -
      </button>
      <p>React Hooks App</p>
    </div>
  );
};

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

