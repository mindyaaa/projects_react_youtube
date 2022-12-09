import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import{
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Videos from './pages/Videos';
import VideoDetails from './pages/VideoDetails';
import NotFound from './pages/NotFound';


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFound/>,
  children: [
    {index:true, element:<Home />},
    {path:'/videos', element:<Videos />},
    {path:'/videos/:keyword', element:<Videos />},
    {path:'/videos/watch/:videoId', element:<VideoDetails />}
  ]
}])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



