import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enchancedAPI } from '../utils/enhancImgApi'

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const UploadImageHandler = async (file) => {
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    try {
      const enhancedImgUrl = await enchancedAPI(file);
      setEnhancedImage(enhancedImgUrl);
      // setLoading(false);
    } catch (error) {
      
      console.log("Upload Error:", error);
      alert("Error while enhancing the image...");
    } finally {
      setLoading(false);
    }
    
  }
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler}/>
      <ImagePreview 
      loading={loading}
      uploaded={uploadImage}
      enhanced={enhancedImage}
      />
      </>
  )
}

export default Home
