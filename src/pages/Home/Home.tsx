import ArticleList from "@/components/ArticleList";
import { useStores } from "@/useStores";
import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  const { articleStore } = useStores();

  React.useEffect(() => {
    articleStore.getArticles();
  }, []);

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
                {/* {isAuth && (
                  <li className="nav-item">
                    <button
                      onClick={onFeedClick}
                      type="button"
                      className={classNames("nav-link", {
                        active: filters.feed,
                      })}
                    >
                      Your Feed
                    </button>
                  </li>
                )} */}
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    // onClick={onGlobalFeedClick}
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
