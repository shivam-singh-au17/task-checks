import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

axios.interceptors.push({
    request: config => {
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    }
});

// Make API request
axios.get('https://protected-resource.com/api/data')
    .then(response => console.log(response.data))
    .catch(error => console.error(error));