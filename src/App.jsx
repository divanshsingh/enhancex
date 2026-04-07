import React from 'react'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold mb-2'>EnhanceX AI</h1>
        <p className='text-lg text-gray-500'>Upload your image and let our AI enhance it to perfection!</p>
      </div>

      <Home />
      
      <div className='text-sm text-gray-500 mt-4'>
        Powered by EnhanceX AI
      </div>
    </div>
  )
}

export default App
