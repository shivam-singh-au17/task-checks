axios.get('https://api.example.com/protected-resource', {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
    .then(response => {
        console.log('Resource accessed:', response.data);
    })
    .catch(error => {
        console.error('Error accessing resource:', error);
    });