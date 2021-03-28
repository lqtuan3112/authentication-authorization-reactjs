import axios from 'axios';
import instance from './axios';
import { generateQueryParam } from './commons/commonFunctions';

/**
 * Base các phương thức api
 * @author LQTUAN (10/01/2021)
 */
const baseApi = {
    /**
     * Base chung xử lý phương thức GET api
     * @param {*} endpoint
     * @param {*} objectParam
     * @param {*} beforeRequest
     * @param {*} onSuccess
     * @param {*} onError
     * @param {*} isShowLoading
     * @author LQTUAN (10/01/2021)
     */
    get: function (
        endpoint,
        objectParam,
        beforeRequest,
        onSuccess,
        onError,
        isShowLoading = true,
        config
    ) {
        return new Promise(async function (res, rej) {
            try {
                if (beforeRequest) beforeRequest();
                let response = await instance.get(
                    endpoint + generateQueryParam(objectParam),
                    config
                );
                res(response);
                if (onSuccess) onSuccess(response.data);
            } catch (ex) {
                rej(ex);
                if (onError) onError(ex);
            }
        });
    },
    /**
     * Base chung xử lý phương thức POST api
     * @param {*} endpoint
     * @param {*} objectParam
     * @param {*} dataBody
     * @param {*} beforeRequest
     * @param {*} onSuccess
     * @param {*} onError
     * @param {*} isShowLoading
     */
    post: function (
        endpoint,
        objectParam,
        dataBody,
        beforeRequest,
        onSuccess,
        onError,
        isShowLoading = true,
        config
    ) {
        return new Promise(async function (res, rej) {
            try {
                if (beforeRequest) beforeRequest();
                let response = await instance.post(
                    endpoint + generateQueryParam(objectParam),
                    dataBody,
                    config
                );
                res(response);
                if (onSuccess) onSuccess(response.data);
            } catch (ex) {
                rej(ex);
                if (onError) onError(ex);
            }
        });
    },
    /**
     * Base chung xử lý phương thức PUT api
     * @param {*} endpoint
     * @param {*} objectParam
     * @param {*} dataBody
     * @param {*} beforeRequest
     * @param {*} onSuccess
     * @param {*} onError
     * @param {*} isShowLoading
     * @author LQTUAN (10/01/2021)
     */
    put: function (
        endpoint,
        objectParam,
        dataBody,
        beforeRequest,
        onSuccess,
        onError,
        isShowLoading = true,
        config
    ) {
        return new Promise(async function (res, rej) {
            try {
                if (beforeRequest) beforeRequest();
                let response = await instance.put(
                    endpoint + generateQueryParam(objectParam),
                    dataBody,
                    config
                );
                res(response);
                if (onSuccess) onSuccess(response.data);
            } catch (ex) {
                rej(ex);
                if (onError) onError(ex);
            }
        });
    },
    /**
     * Base chung xử lý phương thức Delete api
     * @param {*} endpoint
     * @param {*} objectParam
     * @param {*} dataBody
     * @param {*} beforeRequest
     * @param {*} onSuccess
     * @param {*} onError
     *  @param {*} isShowLoading
     * @author LQTUAN (10/01/2021)
     */
    delete: function (
        endpoint,
        objectParam,
        dataBody,
        beforeRequest,
        onSuccess,
        onError,
        isShowLoading = true,
        config
    ) {
        return new Promise(async function (res, rej) {
            try {
                if (beforeRequest) beforeRequest();
                let response = await instance.delete(
                    endpoint + generateQueryParam(objectParam),
                    dataBody,
                    config
                );
                res(response);
                if (onSuccess) onSuccess(response.data);
            } catch (ex) {
                rej(ex);
                if (onError) onError(ex);
            }
        });
    },
};

export default baseApi;
