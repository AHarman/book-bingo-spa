import { Redirect } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { useQueryValue } from '../../../../hooks/UseQueryString';
import { getAccessToken } from '../../../../services/BookBingoApi';
import { UserContext } from '../../../../context/UserContext';

export default function LoginCallbackPage(): JSX.Element {
    const requestToken = useQueryValue('oauth_token');
    const userContext = useContext(UserContext);

    useEffect(() => {
        if (requestToken && !userContext.user) {
            console.log("getting access token")
            getAccessToken(requestToken).then(userContext.setUser);
        }
    }, [requestToken, userContext]);

    return userContext.user ?
        <Redirect to={'/home'} /> :
        <>Signing in, please wait</>;
}