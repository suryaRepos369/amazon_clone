import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Checkout = () => {
  return (
    <div className=" flex justify-center gap-2 p-20 bg-white">
      <p className="mx-0 my-auto ">
        <CheckCircleIcon sx={{ color: "green" }}></CheckCircleIcon>
      </p>
      <p className="lead p-1 m-0 text-center ">Order placed successfully</p>
    </div>
  );
};

export default Checkout;
