import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import amazonLogo from "./amazon-logo.jpg";
import useAuth from "../../hooks/useAuth";
import warning from "./danger.jpg";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import WarningAmberSharpIcon from "@mui/icons-material/WarningAmberSharp";

function ErrorDisplay(props) {
  return (
    <div className="h-12 w-30 bg-white flex justify-center  ">
      {props.loading ? (
        <div className="h-12 w-10 bg-white flex flex-grow justify-center ">
          <CircularProgress
            sx={{
              color: "yellow",
              size: "small",
            }}
          ></CircularProgress>
        </div>
      ) : (
        ""
      )}
      {props.error && (
        <div // style={{ border: "1px solid red" }}
          id="error"
          className="border border-2 border-danger bg-white  xs:justify-center md:px-5 px-2 py-1  flex-grow lg:gap-5 md:gap-3 sm:gap-1 gap-2"
        >
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
              <p className="lg:text-sm lg:font-semibold text-[15px] my-0 text-red-500">
                There was an Error
              </p>
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

const FormComponent = () => {
  // var phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const location = useLocation();
  const navigate = useNavigate();
  //const emailRef = React.createRef();
  //const  passwordRef = React.useRef();

  // console.log(" auth, loading, error:", auth, loading, error);

  const validationSchema = yup.object({
    email: yup.string().email().required("Email Required"),
    password: yup.string().required("Password Required").min(6).max(15),
  });
  let initialValues = {
    email: "",
    password: "",
  };
  const { auth, login, loading, error, loginPage } = useAuth();

  //const [errDisplay, setErrDisplay] = React.useState(false);

  async function submitFunc(values) {
    let user = true;
    login({ ...values, user });
  }

  var errDisplay = false;
  if (loading || error) errDisplay = true;
  else errDisplay = false;

  React.useEffect(() => {
    if (auth) {
      if (location.state?.from) {
        navigate(location.state.from.pathname);
      } else {
        navigate(loginPage);
      }
    }
  }, [auth, location.state?.from]);

  return (
    <>
      <div className="row bg-white">
        <div className="container-lg " style={{ marginTop: "50px" }}>
          {/* login */}
          <div className="col-md-4 m-auto col-sm-6 col-xs-10 bg-white justify-center border border-1 rounded-lg border-black">
            <div className="lg-px-3 px-1  lg-pb-3 pt-0">
              <img
                className="w-fit h-16 p-2 mt-2 m-auto"
                src={amazonLogo}
                alt=""
              />
              {errDisplay && (
                <ErrorDisplay loading={loading} error={error}></ErrorDisplay>
              )}
              <h3 className="my-auto lead-text mt-2 md:ml-2">Sign In</h3>
              <Formik
                className="flex justify-center"
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitFunc}
              >
                <Form className="bg-white flex flex-col justify-evenly">
                  <div className="m-2">
                    <label className="m-auto font-semibold" htmlFor="name">
                      Enter Email{" "}
                    </label>

                    <Field
                      className="my-1 mx-1 p-2  rounded-lg w-full border border-1 border-black focus:outline-2 focus:outline-yellow-400"
                      type="text"
                      name="email"
                      // ref={emailRef}
                      placeholder="email"
                    ></Field>

                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="m-1 p-1  flex flex-grow border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img className="w-5 h-5 mt-1" src={warning} alt="" />
                          <div className="max-w-40">{msg}</div>
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="m-2 ">
                    <label htmlFor="name" className="font-semibold">
                      Enter Password{" "}
                    </label>

                    <Field
                      className="my-1 p-2 rounded-lg mx-1 w-full border border-1 border-black focus:outline-2 focus:outline-yellow-400"
                      type="password"
                      name="password"
                      placeholder="Password"
                      // validate={emailValid}
                    ></Field>

                    <ErrorMessage name="password">
                      {(msg) => (
                        <div className="m-1 flex p-1 border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img className="w-5 h-5 mt-1" src={warning} alt="" />
                          {msg}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <button
                    disabled={loading || auth}
                    className="  mt-3 mb-0 p-1 font-semibold bg-yellow-400 rounded-sm
                
                     
                     disabled:transform-none disabled:transition-none 
                     disabled:cursor-not-allowed
                    disabled:text-yellow-500
                      hover:bg-gradient-to-t from-yellow-500 to-yellow-400
                      hover:shadow-lg
                     "
                    type="submit"
                  >
                    Login
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
          {/* new account */}
          <span>
            <Divider
              className="col-md-4 my-2 col-sm-6 col-xs-10 text-xs justify-center m-auto"
              sx={{ color: "black" }}
            >
              New to Amazon
            </Divider>
          </span>

          <div className="lead text-center my-1">
            <NavLink to="/signup" className=" text-black text-decoration-none">
              <p
                className=" text-sm border border-1 
                text-decoration-none
                font-semibold
                py-2 col-md-4 rounded-sm
                col-sm-6 col-xs-10 hover:bg-yellow-400  
                transition ease-in-out delay-250 border-black bg-gray-200 
                m-auto "
              >
                Create Amazon account
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormComponent;
