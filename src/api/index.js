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