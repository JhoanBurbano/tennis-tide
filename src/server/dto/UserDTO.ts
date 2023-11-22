export default class UserDTO {
    constructor(
        public name: string,
        public lastname: string,
        public dateOfBirth: Date,
        public role: 'admin' | 'user',
        public user: string,
        public password: string,
        public favorites: Array<string>,
        public wins: Array<string>
    ) {}
}

export type UserRegisterDTO = Omit<UserDTO, 'favorites' | 'wins' |'role'>