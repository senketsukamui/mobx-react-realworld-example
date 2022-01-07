import { makeAutoObservable } from "mobx";
import { transport } from "../transport";
import { IArticle } from "./types";

class ArticleStore {
  public articles: IArticle[] = [];
  public loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public getArticles() {
    this.loading = true;
    return transport.articleTransport
      .getArticles()
      .then((response) => {
        this.articles = response.data.articles;
      })
      .finally(() => (this.loading = false));
  }

  public favoriteArticle(slug: string) {
    this.loading = true;
    return transport.articleTransport.favoriteArticle(slug).then((response) => {
      this.articles = this.articles.map((article: IArticle) => {
        if (article.slug === response.data.article.slug) {
          return { ...response.data.article };
        } else {
          return article;
        }
      });
    });
  }

  public unfavoriteArticle(slug: string) {
    this.loading = true;
    return transport.articleTransport
      .unfavoriteArticle(slug)
      .then((response) => {
        this.articles = this.articles.map((article: IArticle) => {
          if (article.slug === response.data.article.slug) {
            return { ...response.data.article };
          } else {
            return article;
          }
        });
      });
  }
}

export default new ArticleStore();
