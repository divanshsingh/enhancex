import React from 'react'

const ImageUpload = ({UploadImageHandler}) => {
  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    UploadImageHandler(file);
    
  }
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>   
      <label htmlFor="fileInput"
      className='block w-full cursor-pointer border-2 border-dashed border-gray-400 rounded-lg p-6 text-center hover:border-blue-300 transition-all'
      >
        <input type="file" id='fileInput' 
        className='hidden'
        onChange={ShowImageHandler}
        />
        Click or drag to upload your image
      </label>
    </div>
  )
}

export default ImageUpload
