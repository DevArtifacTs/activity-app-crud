import Axios from 'axios';

// Axios http client 
const client = Axios.create({
    baseURL: 'http://localhost:4000',
    validateStatus : () => true  //prevent error that cause our web page blanked.
});

export const getRecords = async () => {
    const response = await client.get('/users/me/records');
    return response ;
}

export const postRecords = async (jsonBody) => {
    const response = await client.post('/users/me/records', jsonBody)
    return response ;
}

export const putRecord = async (_id, jsonBody) => {
    const response = await client.put(`/users/me/records/${_id}`, jsonBody);
    return response;
}

export const deleteRecords = async (_id) => {
    const response = await client.delete(`/users/me/records/${_id}`)
    return response ;
}

