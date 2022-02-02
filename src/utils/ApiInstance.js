import axios from 'axios';

const baseUrl = "https://swapi.dev/api/";

axios.defaults.baseURL = baseUrl;

const apiInstance = axios.create();

export default apiInstance;