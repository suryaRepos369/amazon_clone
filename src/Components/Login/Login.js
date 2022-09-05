import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import amazonLogo from "./amazon-logo.jpg";
const FormComponent = () => {
  // var phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const location = useLocation();
  const navigate = useNavigate();
  //const emailRef = React.createRef();
  //const  passwordRef = React.useRef();

  const from = location.state?.from?.pathname || "/home";

  const validationSchema = yup.object({
    email: yup.string().email().required("Email Required"),
    password: yup.string().required("Password Required").min(6).max(15),
  });
  let initialValues = {
    email: "",
    password: "",
  };

  React.useEffect(() => {
    // emailRef.current.focus();
  }, []);

  function submitFunc(values) {
    console.log("form values  :", values);
    navigate(from, { replace: true });
  }

  return (
    <>
      <div className="row bg-white">
        <div className="container-lg " style={{ marginTop: "50px" }}>
          {/* login */}
          <div className="col-md-4 m-auto col-sm-6 col-xs-10 bg-white justify-center border border-2 rounded-lg border-black">
            <div className="p-3">
              <img className="w-40 h-20 m-auto" src={amazonLogo} alt="" />
              <h3 className="lead-text ml-2">Sign In</h3>
              <Formik
                className="flex justify-center"
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitFunc}
              >
                <Form className="bg-white flex flex-col justify-evenly">
                  <div className="m-2">
                    <label className="m-auto fw-bolder " htmlFor="name">
                      Enter Email{" "}
                    </label>

                    <Field
                      className="my-1 mx-1 p-2  rounded-lg w-full border border-2 border-black"
                      type="text"
                      name="email"
                      // ref={emailRef}
                      placeholder="email"
                    ></Field>

                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="m-1 p-1  flex flex-grow border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img
                            className="w-5 h-5 mt-1"
                            src="https://thumbs.dreamstime.com/b/warning-icon-sign-flat-style-isolated-caution-symbol-warning-icon-sign-flat-style-isolated-caution-symbol-your-web-162484612.jpg"
                            alt=""
                          />
                          <div className="max-w-40">{msg}</div>
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="m-2 ">
                    <label htmlFor="name" className="fw-bolder">
                      Enter Password{" "}
                    </label>

                    <Field
                      className="my-1 p-2 rounded-lg mx-1 w-full border border-2 border-black"
                      type="password"
                      name="password"
                      placeholder="Password"
                      // validate={emailValid}
                    ></Field>

                    <ErrorMessage name="password">
                      {(msg) => (
                        <div className="m-1 flex p-1 border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img
                            className="w-5 h-5 mt-1"
                            src="https://thumbs.dreamstime.com/b/warning-icon-sign-flat-style-isolated-caution-symbol-warning-icon-sign-flat-style-isolated-caution-symbol-your-web-162484612.jpg"
                            alt=""
                          />
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <button
                    className=" mt-3 mb-0 p-1 font-bold bg-yellow-400 rounded-md hover:bg-gradient-to-t from-yellow-500 to-yellow-400"
                    type="submit"
                  >
                    Login{" "}
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          {/* new account */}
          <div>
            <div className="lead text-center my-1">
              <h5>New to amazon?</h5>
              <NavLink
                to="/signup"
                className=" text-yellow-600 text-lg font-semibold hover:text-yellow-500 hover:text-xl transition ease-in-out delay-250 text-decoration-none"
              >
                Create account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
