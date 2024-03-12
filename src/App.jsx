import './App.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './assets/router/Router';

function App() {

  return (
    <>
      <RouterProvider router={router}>      
      </RouterProvider>
    </>
  )
}

export default App
