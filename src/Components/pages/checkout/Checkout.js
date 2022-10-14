import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import CartHasItems from "../../cart/CartHasItems";
import useCart from "./../../../hooks/useCart";

const steps = ["Select Address ", "check Order", "payment", "Billing page"];

export default function CheckoutStepper() {
  const handleSelectChange = (id, price, image, description, qty) => {
    console.log("selected value", id, qty);
    bulkAdd({ id, price, img: image, qty });
  };
  const { cartItems, cartQuantity, cartTotal, deleteItem, bulkAdd } = useCart();

  const navigate = useNavigate();
  const history = useLocation();
  console.log("history:", history);

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      className="flex flex-col justify-center align-middle m-auto"
      sx={{ width: "100%", justifyContent: "center" }}>
      <div className="m-auto">
        <Stepper
          className=" px-8 py-2 border-black flex flex-col mt-1 "
          sx={{ maxWidth: "700px", Align: "middle", justifyContent: "center" }}
          activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              //  labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step
                className=""
                key={label}
                {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - finished</Typography>
          {navigate("/home")}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          {activeStep === 2 && (
            <div>
              <h2 className="lead min-h-[300px] bg-white">Please select the payment</h2>
            </div>
          )}
          {activeStep === 0 && (
            <div className="row bg-red-500 min-h-[200px]">
              <h1 className="lead text-center">Please select the delivery address</h1>
            </div>
          )}
          {activeStep === 1 && (
            <div>
              <CartHasItems
                cartItems={cartItems}
                handleSelectChange={handleSelectChange}
                deleteItem={deleteItem}
                cartQuantity={cartQuantity}
                cartTotal={cartTotal}
              />
            </div>
          )}
          {activeStep === 3 && <div>hi</div>}

          <Box className="sticky bottom-1 flex bg-gray-400 ">
            <button
              className="link bg-yellow-300 disabled:bg-yellow-100 disabled:cursor-not-allowed hover:text-black m-2 px-2 py-1 rounded-xl"
              onClick={handleBack}
              disabled={activeStep === 0}>
              Back
            </button>
            <Box
              className="self-end"
              sx={{ flex: "1 1 auto " }}
            />
            {isStepOptional(activeStep) && (
              <Button
                color="inherit"
                onClick={handleSkip}
                sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <button
              className="link hover:text-black bg-yellow-300 m-2 px-2 py-1 rounded-xl"
              onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </button>
            {/* <Button onClick={handleNext}>{activeStep === steps.length - 1 ? "Finish" : "Next"}</Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
