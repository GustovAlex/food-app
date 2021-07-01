import axios from "axios"

export const fetchGetClientData = async () => {
    const response = await axios.get("http://localhost:5000/api/category")
    return response
}

export const fetchGetProductList = async () => {
    const response = await axios.get("http://localhost:5000/api/product")
    return response
}
