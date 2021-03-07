  
const axios = require("axios");

module.exports = {
    api(){
        const api = axios.create({
            baseURL:'http://localhost:3000',
        });

        return api;
    }
}