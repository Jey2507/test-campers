import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"

export const getTracks = async () => {
    try {
        const response = await axios.get("/campers")
        return response.data.items;
    } catch (error) {
        console.log(error)
    }
}

export const getTracksById = async (id) => {
    try {
        const response = await axios.get(`/campers/${id}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}