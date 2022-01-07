import { IArticle } from "@/stores/article/types";
import { useStores } from "@/useStores";
import clsx from "clsx";
import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface IArticleProps {
  article: IArticle;
}

const Article: FunctionComponent<IArticleProps> = ({ article }) => {
  const { articleStore } = useStores();
  const handleClickFavorite = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (article.favorited) {
      articleStore.unfavoriteArticle(article.slug);
    } else {
      articleStore.favoriteArticle(article.slug);
    }
  };

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${article.author.username}`}>
          <img src={article.author.image} alt="" />
        </Link>

        <div className="info">
          <Link className="author" to={`/@${article.author.username}`}>
            {article.author.username}
          </Link>
          <span className="date">
            {new Date(article.createdAt).toDateString()}
          </span>
        </div>

        <div className="pull-xs-right">
          <button
            className={clsx("btn btn-sm", {
              "btn-outline-primary": !article.favorited,
              "btn-primary": article.favorited,
            })}
            onClick={handleClickFavorite}
          >
            <i className="ion-heart" /> {article.favoritesCount}
          </button>
        </div>
      </div>

      <Link to={`/article/${article.slug}`} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {article.tagList.map((tag) => {
            return (
              <li className="tag-default tag-pill tag-outline" key={tag}>
                {tag}
              </li>
            );
          })}
        </ul>
      </Link>
    </div>
  );
};

export default observer(Article);
