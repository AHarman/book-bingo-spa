import { createContext } from 'react';
import { UserModel } from '../models/User';

export interface UserContextType {
    user: UserModel | undefined;
    setUser: (user: UserModel) => void;
}

export const defaultUserContext: UserContextType = {
    user: undefined,
    setUser: () => {}
};

export const UserContext = createContext(defaultUserContext);
