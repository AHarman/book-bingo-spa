import { useLocation } from 'react-router-dom';

export function useQuery(): {[index: string]: string} {
    const location = useLocation();

    const result = {} as {[index: string]: string};

    new URLSearchParams(location.search)
        .forEach((value, key) => result[key] = value);

    return result;
}

export function useQueryValue(key: string): string | null {
    const location = useLocation();

    return new URLSearchParams(location.search).get(key);
}