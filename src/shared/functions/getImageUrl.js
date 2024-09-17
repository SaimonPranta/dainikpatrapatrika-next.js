import { BACKEND_URL } from "../constants/ulrList"

const getImageUrl = (img) => {
    let url = ""
    if (Array.isArray(img)) {
        url = `${BACKEND_URL}/${img[0]}`
    } else {
        url = `${BACKEND_URL}/${img}`
    }
    return url
}


export default getImageUrl