export interface UserManager {
    addUser: (user: User) => void,
    removeUser: (name: string) => void,
    getConnectedUsers: () => ConnectedUsers,
}

export type ConnectedUsers = { [key: string]: User };

export type User = {
    id: string;
    name: string;
}
