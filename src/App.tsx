import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { useState } from 'react'

import { TaskProvider } from './assets/context/taskContext.tsx'

import Sidebar from './assets/components/Sidebar.tsx'
import DashboardPage from './pages/dashboardPage'
import ConfigPage from './pages/configPage'
import './App.css'

function App() {

  return (
    <TaskProvider>
      <BrowserRouter>
        <div className="flex h-screen">
          <Sidebar />
          <div className='flex-1'>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/config" element={<ConfigPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TaskProvider>
  )
}

export default App
