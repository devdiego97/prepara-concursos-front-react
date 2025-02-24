import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx';
import 'rsuite/dist/rsuite-no-reset.min.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContextDataProvider } from './context/contextdata.tsx'
import { CustomProvider } from 'rsuite';
import { ContextUIProvider } from './context/contextcomponents.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

<CustomProvider>
  <ContextDataProvider>
    <ContextUIProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ContextUIProvider>
  </ContextDataProvider>
</CustomProvider>
)
