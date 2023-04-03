import axios from "axios";

function API() {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });
}

export default API;