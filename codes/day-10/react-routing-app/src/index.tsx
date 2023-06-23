import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from './routes/AppRoutes';
// import AllRoutes from './routes/AllRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </React.StrictMode>
// );
