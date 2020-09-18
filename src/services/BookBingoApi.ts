import { Book } from '../models/Book';
import { BookshelfEntry } from '../models/BookshelfEntry';
import { User } from '../models/User';

const baseUrl = 'https://localhost:5001/api';

async function makeRequest(path: string, method: string = 'GET'): Promise<Response> {
    return await fetch(baseUrl + path, { credentials: 'include', method: method });
}

const makeRequestJson = async <T>(path: string, method: string = 'GET'): Promise<T> =>
    await (await makeRequest(path, method)).json() as T;

const makeRequestText = async (path: string, method: string = 'GET'): Promise<string> =>
    await (await makeRequest(path, method)).text();


export const getUser = async (): Promise<User> => await makeRequestJson<User>('/user');

export const getBookshelf = async (userId: string, shelf: string): Promise<BookshelfEntry[]> =>
    await makeRequestJson<BookshelfEntry[]>(`/user/${userId}/shelves/${shelf}`);

export const getRequestToken = async (): Promise<string> =>
    await makeRequestText('/oauth/request_token', 'POST');

export const getAccessToken = async (requestToken: string): Promise<User> =>
    await makeRequestJson<User>(`/oauth/access_token?request_token=${requestToken}`, 'POST');
