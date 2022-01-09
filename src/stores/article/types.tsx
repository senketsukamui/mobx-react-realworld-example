import { IUserProfile } from "../user/types";

export interface IArticle {
  author: IUserProfile;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: Array<string>;
  title: string;
  updatedAt: string;
}

export interface IArticleFilter {
  tag: string;
  offset: number | null;
  feed: boolean;
}
