import ArticleList from "@/components/ArticleList";
import { useStores } from "@/useStores";
import clsx from "clsx";
import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";
import { IArticleFilter } from "@/stores/article/types";

const initialFilters = Object.freeze({
  tag: "",
  offset: null,
  feed: false,
});

const Home: FunctionComponent = () => {
  const { articleStore, sessionStore } = useStores();

  const [filters, setFilters] = React.useState<IArticleFilter>({
    ...initialFilters,
    feed: Boolean(sessionStore.token),
  });

  React.useEffect(() => {
    articleStore.getArticles();
  }, [filters]);

  const changeFilterTag = (tag: string) => {
    setFilters({ ...filters, tag });
  };

  const setGlobalFeed = () => {
    setFilters(initialFilters);
  };

  const setUserFeed = () => {
    setFilters({ ...initialFilters, feed: true });
  };

  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {sessionStore.token && (
                  <li className="nav-item">
                    <button
                      onClick={setUserFeed}
                      type="button"
                      className={clsx("nav-link", {
                        active: filters.feed,
                      })}
                    >
                      Your Feed
                    </button>
                  </li>
                )}
                <li className="nav-item">
                  <button
                    type="button"
                    className={clsx("nav-link", {
                      active: !filters.feed,
                    })}
                    onClick={setGlobalFeed}
                  >
                    Global Feed
                  </button>
                </li>
              </ul>
            </div>
            <ArticleList articles={articleStore.articles} />
          </div>
          <div className="col-md-3">
            {/* <PopularTags onTagClick={onTagClick} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Home);
