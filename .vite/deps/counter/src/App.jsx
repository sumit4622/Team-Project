import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useState } from 'react';



function App() {
  const [sumit, setSumit] = useState('Sumit Ray');
  return (
  <>
  <h1 class= 'container bg-red-500 mx-auto underline'>Hello Vite + React!</h1>
  <img src={viteLogo} alt="Vite Logo" class='w-32 h-32'/>
  <img src={reactLogo} alt="React Logo" class='w-32 h-32'/>
  <p class='text-8xl text-sky-500'>Edit <code>App.jsx</code> and save to test HMR updates.</p>
  {
    sumit === 'Sumit Ray' ? <button onClick={() => setSumit('Sumit Ray 2')}>Change Name</button> : <button onClick={() => setSumit('Sumit Ray')}>Change Name</button>
  }
  <h1 class= 'container bg-red-500 mx-auto underline'>What is your name?</h1>
  <p class='text-8xl text-sky-500'> My name is Sumit Ray: {sumit}</p>

  </>
  );

  
}

export default App
