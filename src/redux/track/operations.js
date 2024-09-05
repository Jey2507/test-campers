import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io"

export const getTracks = createAsyncThunk("campers/getTrack", async (_, thunkAPI)  => {
    try {
        const response = await axios.get("/campers",{
            params: {
                page: 1,
                limit: 4
            }
        })
        return response.data;
    } catch (error) {
         thunkAPI.rejectWithValue(error.message);
    }
})

export const getTracksById = createAsyncThunk("campers/getTrackById", async (id, thunkAPI)=> {
    try {
        const response = await axios.get(`/campers/${id}`);
        console.log(response)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})