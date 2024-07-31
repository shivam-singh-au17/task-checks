import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');
const tokenUrl = 'https://authorization-server.com/oauth/token';

// Check token expiration time
const tokenExpirationTime = jwtDecode(accessToken).exp;
const currentTime = Math.floor(Date.now() / 1000);
if (tokenExpirationTime - currentTime < 300) { // 5 minutes before expiration
    // Refresh token
    axios.post(tokenUrl, {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret
    })
        .then(response => {
            const newAccessToken = response.data.access_token;
            // Store new access token securely
            localStorage.setItem('accessToken', newAccessToken);
        })
        .catch(error => console.error(error));
}