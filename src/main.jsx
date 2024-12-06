import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Produto from './pages/Produto.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    //Elemento Pai
    path:'/',element:<App/>,

    //Elemento Filho
    children:[
      {path:'/', element:<Home/>},
      {path:'/produto', element:<Produto/>},
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
