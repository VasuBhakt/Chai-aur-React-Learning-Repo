import React from "react";

// Define the shape of the user object (extend as needed)
export interface User {
    username?: string;
    password?: string;
}

// Define the shape of the context value
interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextType | null>(null);

export default UserContext;