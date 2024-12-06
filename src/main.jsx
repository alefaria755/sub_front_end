import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Solucao from './routes/Solucao.jsx'
import Error from './routes/Error.jsx'
import Login from './routes/Login.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
import Sobre from './routes/Sobre.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    //Elemento Pai
    path:'/',element:<App/>,

    //Elemento Filho
    children:[
      {path:'/', element:<Home/>},
      {path:'/solucao', element:<Solucao/>},
      {path:'/Error', element:<Error/>},
      {path:'/Login', element:<Login/>},
      {path:'/Cadastrar', element:<Cadastrar/>},
      {path:'/Sobre', element:<Sobre/>},

    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
