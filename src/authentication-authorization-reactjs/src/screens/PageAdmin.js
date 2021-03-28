import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../apis/axios';
import instance from '../apis/axios';
import baseApi from '../apis/baseApi';

PageAdmin.propTypes = {};

function PageAdmin(props) {
    useEffect(() => {
        baseApi.post('/authentication/helloAdmin', null, null, null, (res) => {
            alert('From backend :' + res);
        });
        // .then((res) => {
        //     alert('From backend :' + res.data);
        // })
        // .catch((err) => {
        //     console.log(err);
        // });
    }, []);
    return <div>Hello, admin</div>;
}

export default PageAdmin;
