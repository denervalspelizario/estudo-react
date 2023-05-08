import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { CounterContextProvider } from './context/CounterContext';  // importando o Contexto
import { TitleColorContextProvider } from './context/TitleColorContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterContextProvider>  {/* Contexto sera envolto de app para agente poder usar contexto em todos as paginas do app */}
      
      <TitleColorContextProvider> {/* evolvendo app com um novo context*/}
        <App />
      </TitleColorContextProvider>
      
    </CounterContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
