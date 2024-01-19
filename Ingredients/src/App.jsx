import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Outlet } from 'react-router';
import Navbar from './components/navbar/Navbar';



function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
