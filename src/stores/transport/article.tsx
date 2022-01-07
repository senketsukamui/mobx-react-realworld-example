import axios from "axios";

class ArticleTransport {
  static getArticles() {
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
