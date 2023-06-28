import axios from "axios";
export const UploadImageToCloudinary = async (file) =>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'hoccda87')
    const cloudinaryUploadUrl = 'https://api.cloudinary.com/v1_1/dujmm30rm/image/upload'


    const result = await axios({
        url : cloudinaryUploadUrl,
        method : "POST",

        Headers : {
            "Content-Type" : "application/x-www-form-urlencoded",

        },
        data : formData,
    });
    return result;
}