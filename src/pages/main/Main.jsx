import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Main= () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main;
