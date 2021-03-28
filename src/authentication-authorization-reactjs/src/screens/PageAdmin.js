import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from '../apis/axios';

PageAdmin.propTypes = {};

function PageAdmin(props) {
    useEffect(() => {
        axios
            .post('https://localhost:44364/api/authentication/helloAdmin')
            .then((res) => {
                alert('From backend :' + res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return <div>Hello, admin</div>;
}

export default PageAdmin;
