import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react';
import { useQueryValue } from '../../hooks/UseQueryString';
import { getAccessToken } from '../../services/BookBingoApi';
import { UserContext } from '../../context/UserContext';

export default function LoginCallback(): JSX.Element {
    const requestToken = useQueryValue('oauth_token');
    const userContext = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (requestToken && !userContext.user) {
            getAccessToken(requestToken).then(userContext.setUser);
        } else {
            router.push('/')
        }
    }, [requestToken, userContext]);

    return <>Signing in, please wait</>;
}