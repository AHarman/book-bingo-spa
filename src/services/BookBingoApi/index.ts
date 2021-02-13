import { BookModel } from '../../models/Book';
import { BookshelfEntryModel } from '../../models/BookshelfEntry';
import { UserModel } from '../../models/User';
import { BookshelfEntryDto } from './BookshelfEntryDto';

const baseUrl = 'https://localhost:5001/api';

async function handleBadStatus(response: Response): Promise<Response> {
    if(response.ok) {
        return response;
    }
    throw Error(`Request failed with code ${response.status}, message ${await response.text()}`);
}

async function makeRequest(path: string, method: string = 'GET'): Promise<Response> {
    return await fetch(baseUrl + path, { credentials: 'include', method: method })
        .then(handleBadStatus);
}

const makeRequestJson = <T>(path: string, method: string = 'GET'): Promise<T> =>
    makeRequest(path, method).then(response => response.json());

const makeRequestText = (path: string, method: string = 'GET'): Promise<string> =>
    makeRequest(path, method).then(response => response.text());

export const getUser = (): Promise<UserModel> => makeRequestJson<UserModel>('/user');

export const getBookshelf = async (userId: string, shelfName: string): Promise<BookshelfEntryModel[]> => {
    const dtos = await makeRequestJson<BookshelfEntryDto[]>(`/user/${userId}/shelves/${shelfName}`);
    return dtos.map(entry => ({
        id: entry.id,
        bookStarted: new Date(entry.bookStarted),
        bookRead: new Date(entry.bookRead),
        added: new Date(entry.added),
        lastUpdated: new Date(entry.lastUpdated),
        book: entry.book as BookModel
    }));
};

export const getRequestToken = (): Promise<string> =>
    makeRequestText('/oauth/request_token', 'POST');

export const getAccessToken = (requestToken: string): Promise<UserModel> =>
    makeRequestJson<UserModel>(`/oauth/access_token?request_token=${requestToken}`, 'POST');
