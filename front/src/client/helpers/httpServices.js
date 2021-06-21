import axios from "axios"

export const fetchGetClientData = async () => {
    const response = await axios.get("http://localhost:5000/api/category")
    console.log("response", response)
    return response
}
