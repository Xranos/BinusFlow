import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import { useState } from 'react'

import Sidebar from './assets/components/Sidebar.tsx'
import DashboardPage from './pages/dashboardPage'
import ConfigPage from './pages/configPage'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className="bg-gray-[#FF8040]">
        <Sidebar />
        <Routes>
          <Route path= "/" element={<DashboardPage />} />
          <Route path= "/config" element={<ConfigPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
