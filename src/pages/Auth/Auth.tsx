import React, { FunctionComponent } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { transport } from "@/stores/transport";

const Auth: FunctionComponent = () => {
  const isRegisterPage = useMatch("/register");
  const navigate = useNavigate();
  const authInitialValues = { email: "", password: "" };

  async function onSubmit(values, actions) {
    try {
      let requestData = {};

      if (isRegisterPage) {
        const response = transport.authTransport.register(
          values.email,
          values.password,
          values.username
        );

        console.log(response);

        // requestData = data;
      } else {
        const response = transport.authTransport.login(
          values.email,
          values.password
        );

        console.log(response);
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

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
              onSubmit={onSubmit}
              initialValues={
                isRegisterPage
                  ? { ...authInitialValues, username: "" }
                  : authInitialValues
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
