import { useState } from 'react'
import './App.css'
import BestSeller from './components/BestSeller/BestSeller'
import TopBrands from './components/TopBrands/TopBrands'

function App() {
 

  return (
    <>
    {/* <BestSeller/> */}
    <div className="main">
    <BestSeller/>
    <TopBrands/>
    </div>
    </>
   
  )
}

export default App
