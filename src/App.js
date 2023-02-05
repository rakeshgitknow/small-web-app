import { StrictMode } from 'react';
import './App.css';
import {  RouterProvider } from 'react-router-dom';
import { router } from './Router';

export default function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
};



