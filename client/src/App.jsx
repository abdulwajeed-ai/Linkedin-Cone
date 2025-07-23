import React from 'react'
import InitialNavbar from './components/initial-navbar/initial-navbar'
import LandingPage from './pages/landingPage'

const App = () => {
  return (
    <div className='bg-gray-100 w-[100%] box-border'>
      <InitialNavbar/>
      <LandingPage/>
    </div>
  )
}

export default App