import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Layout from './Layout.jsx'
import ReactDOM from 'react-dom/client'
import Home from "../src/component/Home/Home.jsx"
import { Collect, Insta, Skill } from './allComp.js'
import About from './component/about/About.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import DisplayExperience from './component/project/experience.jsx'
import ProjectCard from './component/project/component.jsx'
import Project from './component/project/Project.jsx'


const route = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path: "",
        element: <Home/>
      },
      {
        path : "experience",
        element : <DisplayExperience/>
      },
      {
        path : "about",
        element :<About/>
        },
        {
          path : "Skill",
          element :<Skill/>
          },
          {
            path : "Collect",
            element :<Collect/>
            },
            {
              path : "Insta",
              element :<Insta/>
              },
              {
                path : "project",
                element : <Project/>
              }
      
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)