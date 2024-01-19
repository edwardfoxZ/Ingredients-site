import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import AboutPage from './components/about/AboutPage.jsx';
import Landingpage from './components/Landing/landingPage.jsx';
import Recipe from './components/recipe/Recipe.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/recipe/:id' element={<Recipe/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
