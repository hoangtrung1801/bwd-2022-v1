import { getDownloadURL, ref } from "firebase/storage";
import storage from "../../firebase";

const imageToUrl = async (images: string[]): Promise<string[]> => {
    let result: string[] = [];
    for(let image of images) {
        const imageRef = ref(storage, `images/${image}`);
        const url = await getDownloadURL(imageRef);
        result.push(url);
    }
    return result;
}

export default imageToUrl;