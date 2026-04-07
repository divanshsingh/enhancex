import React from 'react'
import Loading from './Loading'

const ImagePreview = ({loading, uploaded, enhanced}) => {
  return (
    <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl '>

      {/* Origina Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-lg font-semibold text-center bg-gray-800 text-white py-2'>Original Image</h2>
        {uploaded ? 
      <img src={uploaded} alt="" className='w-full h-full object-cover'/>  
        : <div className='flex items-center justify-center h-80 bg-gray-200'>No Image selected</div>}
      </div>

      {/* Enhanced Image */}
      <div className='bg-white shadow-lg rounded-xl overflow-hidden'>
        <h2 className='text-lg font-semibold text-center bg-green-600 text-white py-2'>Enhanced Image</h2>
        {enhanced && !loading && (
          <img src={enhanced} alt="" className='w-full h-full object-cover'/>  
        )
        }
        {loading ? <Loading /> :
        <div className='flex items-center justify-center h-80 bg-gray-200'>No enhanced image</div>}
      </div>      
      
    </div>
  )
}

export default ImagePreview
