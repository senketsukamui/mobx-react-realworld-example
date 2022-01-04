import React, { FunctionComponent } from "react";
import { Link, useMatch } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const Auth: FunctionComponent = () => {
  const isRegisterPage = useMatch("/register");

  const loginInitialValues = { email: "", password: "" };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">
              Sign {isRegisterPage ? "up" : "in"}
            </h1>
            <p className="text-xs-center">
              <Link to="/register">
                {isRegisterPage ? "Have" : "Need"} an account?
              </Link>
            </p>
            <Formik
              onSubmit={() => {}}
              initialValues={
                isRegisterPage
                  ? { ...loginInitialValues, username: "" }
                  : loginInitialValues
              }
            >
              {({ isSubmitting }) => (
                <>
                  <Form>
                    {isRegisterPage && (
                      <fieldset className="form-group">
                        <Field
                          type="text"
                          name="username"
                          className="form-control form-control-lg"
                          placeholder="Your Name"
                        />
                      </fieldset>
                    )}
                    <fieldset className="form-group">
                      <Field
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <Field
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </fieldset>
                    <button
                      disabled={isSubmitting}
                      type="submit"
                      className="btn btn-lg btn-primary pull-xs-right"
                    >
                      Sign {isRegisterPage ? "up" : "in"}
                    </button>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
