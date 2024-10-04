import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Pagepokemons from './pages/Pagepokemons.jsx'
import Cadastro from './pages/Cadastro.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path: "/Home",
        element: <Home/>
      },
      {
        path: "/Pokemons",
        element: <Pagepokemons/>
      },
      {
        path: '/Cadastro',
        element: <Cadastro/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
