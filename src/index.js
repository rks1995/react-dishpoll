import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { DashBoard, ShowDishes, Results, Login } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Toaster position='top-right' />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/list' element={<ShowDishes />} />
        <Route path='/list/results' element={<Results />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
