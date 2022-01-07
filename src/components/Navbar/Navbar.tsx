import React, { FunctionComponent } from "react";
import cx from "clsx";
import { Link } from "react-router-dom";
import { useStores } from "@/useStores";
import { observer } from "mobx-react";

const Navbar: FunctionComponent = () => {
  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive && "active";

  const { sessionStore, userStore } = useStores();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link className={cx("navbar-brand", activeLink)} to="/">
          conduit
        </Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <Link className={cx("nav-link", activeLink)} to="/">
              Home
            </Link>
          </li>
          {sessionStore.token && (
            <>
              <li className="nav-item">
                <Link className={cx("nav-link", activeLink)} to="/editor">
                  <i className="ion-compose" />
                  &nbsp;New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className={cx("nav-link", activeLink)} to="/settings">
                  <i className="ion-gear-a" />
                  &nbsp;Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/@${userStore.user.username}`}>
                  <img
                    style={{
                      width: 24,
                      height: 24,
                      marginRight: 4,
                      borderRadius: "50%",
                    }}
                    src={userStore.user.image}
                  />
                  {userStore.user.username}
                </Link>
              </li>
            </>
          )}
          {!sessionStore.token && (
            <>
              <li className="nav-item">
                <Link className={cx("nav-link", activeLink)} to="/register">
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link className={cx("nav-link", activeLink)} to="/login">
                  Sign in
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default observer(Navbar);
