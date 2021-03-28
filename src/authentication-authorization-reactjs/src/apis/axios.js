import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

var instance = axios.create({
    baseURL: 'https://localhost:44364/api',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // "X-Custom-Header": "Custom",
    },
});

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
    instance.post('/authentication/refreshTokenAdmin').then((tokenRefreshResponse) => {
        failedRequest.response.config.headers['Authorization'] =
            'Bearer ' + tokenRefreshResponse.data;
        return Promise.resolve();
    });

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(instance, refreshAuthLogic);

// Make a call. If it returns a 401 error, the refreshAuthLogic will be run,
// and the request retried with the new token

export default instance;
