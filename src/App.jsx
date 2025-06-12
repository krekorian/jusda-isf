import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/logo_light.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import CreateISF from './app/isf/createISF'
import IsfList from './app/isf/isflist'
import PageNotFound from './app/pageNotFound'




const router = createBrowserRouter([
  {
    path: '/',
    element: <IsfList />,
  },
  {
    path: '/createisf',
    element: <CreateISF />,
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]);



const App = () => {


  return (
    <>
      <header>
        <h1>JUSDA</h1>

      </header>
      <RouterProvider router={router} />
      <footer>
        <p>&copy; 2025 JUSDA USA All rights reserved.</p>
        <div id="footerterms" >
          <p><a href="#">Privacy Policy </a></p>
          <p><a href="#">Terms of Service</a></p>
        </div>

      </footer >


    </>
  )



}




export default App
