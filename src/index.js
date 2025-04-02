// @ts-nocheck

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';
   

const root = ReactDOM.createRoot(document.getElementById('root'));



const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log(process.env.REACT_APP_CLERK_PUBLISHABLE_KEY);


root.render(
  <React.StrictMode>

    {/* <div className="fixed -z-10 min-h-screen w-full items-center px-5 py-24 bg-blue-200"></div> */}
    {/* <div className="fixed -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#222_30%,#87a6ff_100%)]"></div> */}

    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>

    <App />

    </ClerkProvider>


  </React.StrictMode>
);


reportWebVitals();
// 