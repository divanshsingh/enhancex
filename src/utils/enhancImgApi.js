import axios from "axios";

const API_KEY = "wxmdh63ql78bbeugp";
const BASE_URL = "https://techhk.aoscdn.com/";
export const enchancedAPI = async (file) => {
    try {
        const task_id = await uploadImage(file);
        const enchancedImgData = await fetchEnhanceImage(task_id);
        console.log("Image Upload, Task Id: ", task_id);
        
        console.log(enchancedImgData);
        return enchancedImgData;
    } catch (error) {
        console.log("Error while uplaoding image ", error.message);
        
        
    }
}

const uploadImage =  async(file) => {
        //upload image
        // /api/tasks/visual/scale -- post

        const formData = new FormData();
        formData.append("image_file", file);

        const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "X_API_KEY": API_KEY,
            }
        });
        console.log(data);
        // return task_id;
        
}
const fetchEnhanceImage = async(taksId) => {
        //fetch image
        // api/tasks/visual/scale/{task_id} -- get    

}