export interface IUserInfo {
  bio?: string;
  email: string;
  image: string;
  token: string;
  username: string;
}

export interface IUserProfile {
  bio?: string;
  image: string;
  username: string;
  following: false;
}

export interface IUpdateUserObject {
  email?: string;
  username?: string;
  password?: string;
  image?: string;
  bio?: string;
}
