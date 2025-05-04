// src/app/models/user.ts
export interface User {
    id?: string;
    name: string;
    email: string;
    password?: string;
    token?: string;
    createdAt?: Date;
    updatedAt?: Date;
}