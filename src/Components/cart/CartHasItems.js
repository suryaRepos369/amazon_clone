import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
const CartHasItems = ({ cartItems, handleSelectChange, deleteItem, cartQuantity, cartTotal }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="row flex justify-center flex-grow m-1 ">
        <div className="col-9 mt-3 bg-white  ">
          <div className="flex justify-between">
            <h3 className=" p-2 m-1 fw-semi-bold text-align-start ">Shopping Cart</h3>
            <span className="  p-2 mt-3 mr-3 text-muted font-semi-bold ">Price</span>
          </div>
          <Divider sx={{ bgcolor: "secondary.light" }} />

          <div className="flex flex-col justify-evenly">
            {cartItems.map((data, id) => {
              return (
                <React.Fragment key={id}>
                  <div className="m-1 p-2 flex justify-between flex-grow flex-shrink bg-inherit rounded-lg ">
                    <img
                      className="hidden sm:flex w-16 h-20  my-auto mx-2 md:flex md:w-20 md:h-24 md:my-0 md:mx-1 "
                      src={data.image}
                      alt="Loading.."
                    />
                    <div className="flex flex-col flex-grow sm:text-sm">
                      <span className="text m-1 font-small sm:text-sm  md:font-medium text-lg ">{data.name}</span>
                      <div className="mt-3 flex jus">
                        <span className=" ">
                          <select
                            className=" 
                                sm:mt-1
                                border border-1 border-black
                                 rounded-lg bg-gray-200 py-1
                                  text-xs m-1
                                   focus:border-1 active:outline-dashed
                               text-center font-bold "
                            aria-label="Default select example"
                            value={data.quantity}
                            onChange={(e) => {
                              handleSelectChange(data.id, data.price, data.image, data.description, e.target.value);
                            }}>
                            <option value="0">0(Delete)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </span>
                        <Divider
                          orientation="vertical"
                          sx={{ bgcolor: "secondary.light" }}
                          flexItem
                        />

                        <span>
                          {" "}
                          <button
                            onClick={() => {
                              deleteItem({ id: data.id });
                            }}
                            className="bg-inherit text-red-600 p-1 m-1 rounded-lg text-xs  hover:underline">
                            Delete
                          </button>
                        </span>
                        <Divider
                          orientation="vertical"
                          sx={{
                            bgcolor: "secondary.light",
                            height: "20px",
                            mt: "8px",
                          }}
                          flexItem
                        />

                        <span>
                          {" "}
                          <button className=" text-amazon_blue p-1 m-1 text-xs  hover:underline">Save for later</button>
                        </span>

                        <Divider
                          orientation="vertical"
                          sx={{
                            bgcolor: "secondary.light",
                            height: "20px",
                            mt: "8px",
                          }}
                          flexItem
                        />
                      </div>
                    </div>
                    <div className="lead m-1">
                      <h5>₹{parseFloat(data.totalPrice).toFixed(2)}</h5>
                    </div>
                  </div>

                  <Divider sx={{ bgcolor: "secondary.light" }} />
                </React.Fragment>
              );
            })}

            {cartItems.length > 0 && (
              <div className="m-1 p-2 text-right  text-xl">
                {" "}
                <Divider />
                <p className="font-normal">
                  Subtotal {cartQuantity ? `(${cartQuantity}) :` : null}
                  <span className="font-bold"> ₹{parseFloat(cartTotal).toFixed(2)}</span>
                </p>
              </div>
            )}
          </div>
          <Divider sx={{ bgcolor: "secondary.light" }} />

          <div>
            <p className="text-muted text-sm py-3">
              {" "}
              The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your
              items and reflects each item's most recent price. Do you have a promotional code? We'll ask you to enter your claim code when it's time
              to pay.
            </p>
          </div>
        </div>
        <div className="col-3 h-fit mt-3  flex flex-col  ">
          <div className="bg-white p-1 m-1">
            <div className="  flex-grow flex w-full m-1 p-1 ">
              <span>
                <CheckCircleIcon sx={{ color: "green" }} />
              </span>
              <p className="text-xs text-green-600 mx-1">Your first order qualifies for FREE Delivery. Select this option at checkout. Details</p>
              <div></div>
            </div>
            <div className="flex flex-col">
              <p>
                Subtotal {`(${cartQuantity} item):  `}
                <span className="font-bold">{`₹ ${parseFloat(cartTotal).toFixed(2)}`}</span>
              </p>
              <button
                onClick={() => {
                  navigate("/checkout");
                }}
                className="bg-yellow-400 m-1 p-1 rounded-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartHasItems;
