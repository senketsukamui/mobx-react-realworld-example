import axios from "axios";
import { IArticleFilter } from "../article/types";

class ArticleTransport {
  static getArticles(filters: IArticleFilter) {
    return axios.get("/articles");
  }

  static favoriteArticle(slug: string) {
    return axios.post(`/articles/${slug}/favorite`);
  }

  static unfavoriteArticle(slug: string) {
    return axios.delete(`/articles/${slug}/favorite`);
  }
}

export default ArticleTransport;
