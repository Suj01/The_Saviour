import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import IDO from '../pages/IDO'
import Tokenomics from '../pages/Tokenomics'
import Roadmap from '../pages/Roadmap'
import ComingSoon from '../pages/ComingSoon'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ido' element={<IDO/>}/>
        <Route path='/token' element={<Tokenomics/>}/>
        <Route path='/roadmap' element={<Roadmap/>}/>
        <Route path='/coming' element={<ComingSoon/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes