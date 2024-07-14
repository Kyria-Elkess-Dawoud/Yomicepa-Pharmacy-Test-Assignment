import axios from "axios";

const api = axios.create({
    baseURL: 'https://portal-test.rxmaxreturns.com/rxmax'
});

export default api;