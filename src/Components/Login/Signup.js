import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import warning from "./danger.jpg";
import logo from "./amazon-logo.jpg";
const FromC = () => {
  // const { signup, user } = useFirebaseAuth();

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

  // const [loading, setLoading] = React.useState(false);

  async function submitFunc(values) {
    console.log("form values  :", values);
    // try {
    //   await signup(values.email, values.password);
    //   setLoading(true);
    // } catch (e) {
    //   console.log(e);
    // }

    // setLoading(false);
  }

  return (
    <>
      <div className="row bg-white">
        <div
          className="container-lg mx-2 flex flex-grow-1 flex-shrink-1"
          style={{ marginTop: "20px" }}
        >
          {/* login */}
          <div className="col-md-4 m-auto col-xs-8 col-sm-6  bg-white justify-center border border-1 rounded-lg border-dark">
            <div className="p-3">
              <img className="w-40 h-20 m-auto" src={logo} alt="" />

              <h3 className="lead-text ml-2">Create new account</h3>
              <Formik
                className="flex justify-center"
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={submitFunc}
              >
                <Form className="bg-white flex flex-col justify-evenly">
                  <div className="">
                    <label className="m-auto fw-bolder " htmlFor="name">
                      Enter Email{" "}
                    </label>
                    <Field
                      className="my-1 mx-1 p-2 w-full border border-1 rounded-md border-dark"
                      type="text"
                      name="email"
                      placeholder="email"
                      // validate={emailValid}
                    ></Field>
                    <ErrorMessage name="email">
                      {(msg) => (
                        <div className="my-1 flex  flex-grow border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img className="w-5 h-5 mt-1" src={warning} alt="" />
                          <div className="max-w-40">{msg + " !"}</div>
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <div className="m-0 ">
                    <label htmlFor="name" className="fw-bolder">
                      Enter Password{" "}
                    </label>
                    <Field
                      className="my-1 p-2 mx-1 w-full border border-1 rounded-md border-dark"
                      type="password"
                      name="password"
                      placeholder="Password"
                      // validate={emailValid}
                    ></Field>

                    <ErrorMessage name="password">
                      {(msg) => (
                        <div className="m-1 flex border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img className="w-5 h-5 mt-1" src={warning} alt="" />
                          {" " + msg + " !"}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="m-0 ">
                    <label htmlFor="passwordConfirm" className="fw-bolder">
                      Retype Password{" "}
                    </label>

                    <Field
                      className="my-1 p-2 mx-1 w-full border border-1 rounded-md border-dark"
                      type="password"
                      name="passwordConfirm"
                      placeholder="Confirm Password"
                      // validate={emailValid}
                    ></Field>

                    <ErrorMessage name="passwordConfirm">
                      {(msg) => (
                        <div className="m-1 flex p-0 border-2 text-center justify-center rounded-lg border-red-400 text-red-500">
                          <img className="w-5 h-5 mt-1" src={warning} alt="" />
                          {msg + " !"}
                        </div>
                      )}
                    </ErrorMessage>
                  </div>

                  <button
                    // disabled={loading}
                    className=" m-2 mt-5 mb-0 p-1
                   bg-yellow-400 rounded-md 
                   hover:bg-gradient-to-t from-yellow-500
                    to-yellow-400"
                  >
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
