import { IUpdateUserObject } from "@/stores/user/types";
import { useStores } from "@/useStores";
import { Field, Form, Formik } from "formik";
import { observer } from "mobx-react";
import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

const Settings: FunctionComponent = () => {
  const { userStore, sessionStore } = useStores();

  const navigate = useNavigate();

  const logoutAndNavigate = (route: string) => {
    sessionStore.logout();

    navigate(route);
  };

  async function onSubmit(values: IUpdateUserObject) {
    try {
      userStore.updateUser(values);
      const updatedUsername = userStore.user.username;

      logoutAndNavigate(`/profile/@${updatedUsername}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="settings-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Your Settings</h1>
            <Formik
              onSubmit={onSubmit}
              initialValues={userStore.user}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <>
                  <Form>
                    <fieldset disabled={isSubmitting}>
                      <fieldset className="form-group">
                        <Field
                          name="image"
                          className="form-control"
                          type="text"
                          placeholder="URL of profile picture"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="username"
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Your Name"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          as="textarea"
                          name="bio"
                          className="form-control form-control-lg"
                          rows={8}
                          placeholder="Short bio about you"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="email"
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Email"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="password"
                          className="form-control form-control-lg"
                          type="password"
                          placeholder="Password"
                        />
                      </fieldset>
                      <button
                        type="submit"
                        className="btn btn-lg btn-primary pull-xs-right"
                      >
                        Update Settings
                      </button>
                    </fieldset>
                  </Form>
                </>
              )}
            </Formik>
            <hr />
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={() => logoutAndNavigate("/")}
            >
              Or click here to logout.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Settings);
