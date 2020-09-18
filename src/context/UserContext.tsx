import { createContext } from 'react';
import { User } from '../models/User';

export interface UserContextType {
    user: User | undefined,
    setUser: (user: User) => void
}

export const defaultUserContext: UserContextType = {
    user: undefined,
    setUser: () => {}
};

export const UserContext = createContext(defaultUserContext);
