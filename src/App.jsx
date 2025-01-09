import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import FormPage from './pages/FormPage/FormPage'
import ResultsPage from './pages/ResultsPage/ResultsPage'

function App() {
  

  return (
    <BrowserRouter>
     <Header/>

     <Routes>
      <Route path='/' element={<FormPage/>} />
      <Route path='/results' element={<ResultsPage/>} />
     </Routes>


    </BrowserRouter>
  )
}

export default App
