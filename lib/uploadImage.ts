import { ID, storage } from "@/appwrite"

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "64cd57b87cc7aab7cd14",
        ID.unique(),
        file
    );

    return fileUploaded;
};

export default uploadImage;