import { IArticle } from "@/stores/article/types";
import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";
import Article from "../Article";

interface IArticleListProps {
  articles: IArticle[];
}

const ArticleList: FunctionComponent<IArticleListProps> = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => {
        return <Article article={article} key={article.slug} />;
      })}
    </div>
  );
};

export default observer(ArticleList);
