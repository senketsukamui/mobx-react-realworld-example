import FollowButton from "@/components/FollowButton";
import FollowUserButton from "@/components/FollowUserButton";
import { useStores } from "@/useStores";
import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";
import { Link, useParams } from "react-router-dom";

const UserProfile: FunctionComponent = () => {
  const { userStore } = useStores();
  const { user } = useParams();

  console.log(userStore.user.email);

  React.useEffect(() => {
    if (user) userStore.getUser(user);
  }, [user]);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              {userStore.userInfo.image && (
                <img src={userStore.userInfo.image} className="user-img" />
              )}
              <h4>{userStore.userInfo.username}</h4>
              <p>{userStore.userInfo.bio}</p>

              {userStore.user.username === userStore.userInfo.username ? (
                <Link
                  className="btn btn-sm btn-outline-secondary action-btn"
                  to="/settings"
                >
                  <i className="ion-gear-a" /> Edit Profile Settings
                </Link>
              ) : (
                <FollowUserButton profile={userStore.userInfo} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <button type="button" className="nav-link">
                    My Articles
                  </button>
                </li>
                <li className="nav-item">
                  <button type="button" className="nav-link">
                    Favorited Articles
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(UserProfile);
