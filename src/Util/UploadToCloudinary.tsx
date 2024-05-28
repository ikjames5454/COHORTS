const upload_preset = "art-express"
const cloud_name = "dwj0v6ggh"
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

export const uploadImageToCloudinary = async(file: File): Promise<string> => {
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset",upload_preset);
    data.append("cloud_name",cloud_name);

    const res = await fetch(api_url,{
        method:"post",
        body:data

    });
    const fileData = await res.json();
    console.log("The files___",fileData)
    return fileData.url
}