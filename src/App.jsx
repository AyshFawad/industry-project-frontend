import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import FormPage from './pages/FormPage/FormPage'
import ResultsPage from './pages/ResultsPage/ResultsPage'

function App() {
  const [data, setData] = useState([])  
  
  console.log(data)

  return (
    <BrowserRouter>
     <Header/>

     <Routes>
      <Route path='/' element={<FormPage setData={setData}/>} />
      <Route path='/results' element={<ResultsPage id = {data.id}/>} />
     </Routes>


    </BrowserRouter>
  )
}

export default App
