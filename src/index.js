import React from 'react'
//import  ReactDOM  from 'react-dom'
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FitnessProvider } from './context/FitnessContext';

const root= ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
    <FitnessProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FitnessProvider>
)