import axios from 'axios';
import { apiKey } from "../constants"

const apiCall = async (location) => {
    const options = {
        method: 'GET',
        url: 'https://airbnb13.p.rapidapi.com/search-location',
        params: {
            location: location || 'Paris',
            checkin: '2023-09-16',
            checkout: '2023-09-17',
            adults: '1',
            currency: 'USD'
        },
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (e) {
        console.log('ERROR DURING API CALL: ' + e);
        return {}
    }
}

export const fetchRoomsByLocation = (location) => {
    return apiCall(location);
}