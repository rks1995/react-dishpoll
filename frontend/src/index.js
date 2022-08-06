import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App, ShowDishes, Results } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Toaster />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/list' element={<ShowDishes />} />
        <Route path='/list/results' element={<Results />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
