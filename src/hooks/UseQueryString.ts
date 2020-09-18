import { useLocation } from 'react-router-dom';

export function useQuery(): {[index: string]: string} {
    // console.log('Woo');
    // return null;
    const location = useLocation();

    const result = {} as {[index: string]: string};

    new URLSearchParams(location.search)
        .forEach((value, key) => result[key] = value);

    return result;
}

export function useQueryValue(key: string): string | null {
    const location = useLocation();
    console.log('useQueryValue', new URLSearchParams(location.search), new URLSearchParams(location.search).get(key));

    return new URLSearchParams(location.search).get(key);
}