import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import warning from "./danger.jpg";
import logo from "./amazon-logo.jpg";
import useAuth from "./../../hooks/useAuth";
import WarningAmberSharpIcon from "@mui/icons-material/WarningAmberSharp";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useLocation } from "react-router-dom";
const FromC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { auth, login, loading, error, loginPage } = useAuth();

  const validationSchema = yup.object({
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required").min(6).max(15),
    passwordConfirm: yup
      .string()
      .required(" Retype password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
  let initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  async function submitFunc(values) {
    console.log("form values  :", values);
    let user = false;
    login({ ...values, user });
  }

  var errDisplay = false;
  if (loading || error) errDisplay = true;
  else errDisplay = false;
  console.log("errDisplay:", errDisplay);

  React.useEffect(() => {
    if (auth) {
      if (location.state?.from) {
        navigate(location.state.from.pathname);
      } else {
        navigate(loginPage);
      }
    }
  }, [auth, location.state?.from]);

  function ErrorDisplay(props) {
    return (
      <div className="h-fit w-30 bg-white flex justify-center  ">
        {props.loading ? (
          <div className="h-12 w-10 bg-white flex flex-grow justify-center ">
            <CircularProgress
              sx={{
                color: "yellow",
                size: "small",
              }}></CircularProgress>
          </div>
        ) : null}
        {props.error && (
          <div // style={{ border: "1px solid red" }}
            id="error"
            className="border border-2 border-danger bg-white  xs:justify-center md:px-5 px-2 py-1  flex-grow lg:gap-5 md:gap-3 sm:gap-1 gap-2">
            <div className="flex justify-center lg:gap-5 md:gap-3 p-0">
              <span className="justify-left text-red-600 my-auto ml-0">
                <WarningAmberSharpIcon
                  sx={{
                    height: "40px",
                    width: "40px",
                  }}
                />
              </span>

              <div className="flex flex-col p-0">
                <p className="lg:text-sm lg:font-semibold text-[15px] my-0 text-red-500">There was an Error</p>
                <p className=" text-center my-0  text-[13px] ">{props.error}</p>
              </div>
            </div>

            {/* {setTimeout(() => {
           var item = document.getElementById("error");
           item.style.display = "none";
         }, 20000)} */}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="row bg-white">
        <div
          className="container-lg h-fit mx-2 flex flex-grow-1 flex-shrink-1"
          style={{ marginTop: "20px" }}>
          {/* login */}
          <div className="col-md-4 h-fit m-auto col-xs-8 col-sm-6  bg-white justify-center border border-1 rounded-lg border-black">
            <div className="px-3 pb-2 pt-0 h-fit">
              <img
                className="w-fit h-16 m-auto p-2"
                src={logo}
                alt=""
              />

              {errDisplay && (
                <ErrorDisplay
                  loading={loading}
                  error={error}></ErrorDisplay>
              )}

              <h4 className="text  m-auto mb-2">Create new account</h4>
              <Formik
                className="flex justify-center h-fit "
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitFunc}>
                <Form className="bg-white flex flex-col justify-evenly">
                  <div className="">
                    <label
                      className="m-auto ml-2 font-semibold "
                      htmlFor="name">
                      Enter Email{" "}
                    </label>
                    <Field
                      className="my-1 p-2 mx-1 w-full border border-1 rounded-md border-black focus:outline-2 focus:outline-yellow-400"
                      type="text"
                      name="email"
                      placeholder="email"
                      // validate={emailValid}
                    ></Field>
                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="my-1 flex  flex-grow border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img
                            className="w-5 h-5 mt-1"
                            src={warning}
                            alt=""
                          />
                          <div className="max-w-40">{msg + " !"}</div>
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="m-0 ">
                    <label
                      htmlFor="name"
                      className="font-semibold">
                      Enter Password{" "}
                    </label>
                    <Field
                      className="my-1 p-2 mx-1 w-full border border-1 rounded-md border-black focus:outline-2 focus:outline-yellow-400"
                      type="password"
                      name="password"
                      placeholder="Password"
                      // validate={emailValid}
                    ></Field>

                    <ErrorMessage name="password">
                      {(msg) => (
                        <div className="m-1 flex border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img
                            className="w-5 h-5 mt-1"
                            src={warning}
                            alt=""
                          />
                          {" " + msg + " !"}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="m-0 ">
                    <label
                      htmlFor="passwordConfirm"
                      className="font-semibold">
                      Retype Password{" "}
                    </label>

                    <Field
                      className="my-1 p-2 mx-1 w-full border border-1 rounded-md border-black focus:outline-2 focus:outline-yellow-400"
                      type="password"
                      name="passwordConfirm"
                      placeholder="Confirm Password"
                      // validate={emailValid}
                    ></Field>

                    <ErrorMessage name="passwordConfirm">
                      {(msg) => (
                        <div className="m-1 flex p-0 border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img
                            className="w-5 h-5 mt-1"
                            src={warning}
                            alt=""
                          />
                          {msg + " !"}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <button
                    // disabled={loading}
                    className=" m-2 mt-5 mb-0 p-1
                   bg-yellow-400 rounded-md  font-semibold
                   hover:bg-gradient-to-t from-yellow-500
                    to-yellow-400">
                    Create account{" "}
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          {/* new account
          <div>
            <div className="lead text-center my-1">
              <h5>New to amazon?</h5>
              <NavLink to="/" className=" text-yellow-500">
                Create account
              </NavLink>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FromC;
