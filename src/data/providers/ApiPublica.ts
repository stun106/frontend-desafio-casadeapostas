import axios from "axios";

const HOST = 'http://localhost:8080/api/v1';

export const ApiPublica = axios.create({
    baseURL: HOST,
    headers: {
        'Content-Type': 'application/json'
    }
});