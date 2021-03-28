import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
    axios
        .post('https://localhost:44364/api/authentication/refreshTokenAdmin')
        .then((tokenRefreshResponse) => {
            failedRequest.response.config.headers['Authorization'] =
                'Bearer ' + tokenRefreshResponse.data;
            return Promise.resolve();
        });

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axios, refreshAuthLogic);

// Make a call. If it returns a 401 error, the refreshAuthLogic will be run,
// and the request retried with the new token

export default axios;
