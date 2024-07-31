const axios = require('axios');

const clientId = 'your_client_id';
const clientSecret = 'your_client_secret';
const redirectUri = 'http://localhost:3000/callback';
const authorizationCode = 'code_from_oauth_provider';

axios.post('https://oauth-provider.com/token', {
    grant_type: 'authorization_code',
    code: authorizationCode,
    redirect_uri: redirectUri,
    client_id: clientId,
    client_secret: clientSecret
})
    .then(response => {
        const accessToken = response.data.access_token;
        // Store the access token securely, e.g., in an HTTPOnly cookie or secure storage
        console.log('Access token obtained:', accessToken);
    })
    .catch(error => {
        console.error('Error obtaining access token:', error);
    });