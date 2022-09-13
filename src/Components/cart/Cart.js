import React from "react";

const Cart = () => {
  return (
    <>
      <div className="container m-0">
        <div className="row flex justify-center flex-grow m-1">
          <div className="col-8 mt-3 bg-white  ">
            <div className="flex justify-between">
              <h3 className=" p-2 m-1 fw-semi-bold text-align-start ">
                Shopping Cart
              </h3>
              <span className="  p-2 mt-3 mr-3 text-muted font-semi-bold ">
                Price
              </span>
            </div>
            <Divider />
            <div className="flex flex-col justify-evenly">
              {cartItems.map((data, id) => (
                <React.Fragment key={id}>
                  <div className="m-1 p-2 flex justify-between flex-grow flex-shrink bg-gray-100 rounded-lg ">
                    <img
                      className="w-32 h-32 m-1.5"
                      src={data.image}
                      alt="Loading.."
                    />
                    <div className="flex flex-col flex-grow">
                      <span className="text m-1  font-medium text-lg ">
                        {data.name}
                      </span>
                      <div className="mt-5 flex jus">
                        <span className=" ">
                          <select
                            className=" border border-2 p-1 m-1 focus:border-1 focus:border-yellow-400 active:outline-dashed text-center font-bold hover:bg-yellow-300 hover:rounded-md"
                            aria-label="Default select example"
                            defaultValue={data.quantity}
                          >
                            <option onChange={handleSelectChange} value="0">
                              0 (Delete)
                            </option>
                            <option onChange={handleSelectChange} value="1">
                              1
                            </option>
                            <option onChange={handleSelectChange} value="2">
                              2
                            </option>
                            <option onChange={handleSelectChange} value="3">
                              3
                            </option>
                            <option onChange={handleSelectChange} value="4">
                              4
                            </option>
                            <option onChange={handleSelectChange} value="5">
                              5
                            </option>
                          </select>
                        </span>
                        <Divider orientation="vertical" flexItem />

                        <span>
                          {" "}
                          <button className="bg-inherit text-blue-600 p-1 m-1 rounded-lg border  border-2 border-black hover:bg-yellow-300">
                            Delete
                          </button>
                        </span>

                        <Divider orientation="vertical" flexItem />

                        <span>
                          {" "}
                          <button className=" text-blue-600 p-1 m-1 rounded-lg  border border-2 border-red-100 hover:bg-yellow-300">
                            Save for later
                          </button>
                        </span>
                        <Divider orientation="vertical" flexItem />
                      </div>
                    </div>
                    <div className="lead m-1">
                      <h5>
                        ₹
                        {data.price.toLocaleString(navigator.language, {
                          minimumFractionDigits: 0,
                        })}
                      </h5>
                    </div>
                  </div>
                  <Divider variant="fullwidth" />
                </React.Fragment>
              ))}

              {cartItems.length > 0 && (
                <div className="m-1 p-2 text-right  text-xl">
                  {" "}
                  Subtotal {cartQuantity ? `(${cartQuantity})` : null}
                  {}
                </div>
              )}
            </div>
          </div>
              <div>
                <p>
                  Subtotal{" "}
                  {`(${cartQuantity} item): ₹ ${parseFloat(cartTotal).toFixed(
                    2
                  )} `}
                </p>
              </div>
            </div>
          </div>
        ) : (
          //!when cart is empty

          <div>
          <div className="col-10 bg-white m-2 ">
            <div className="flex flex-row justify-between">
              <h2 className="p-4 m-2 mt-3 font-normal">
                Your Amazon cart is empty.{" "}
              </h2>
              <p className=" text-muted p-4 m-3 mt-4">Price</p>
            </div>
            <div className="m-1 p-2 text-right  text-xl">
              {" "}
              <Divider sx={{ bgcolor: "secondary.light" }} />
              <p className="font-normal p-2 m-3">
                Subtotal {cartQuantity ? `(${cartQuantity}) :` : `(0 items):`}
                <span className="font-bold">
                  {" "}
                  ₹{parseFloat(cartTotal).toFixed(2)}
                </span>
              </p>
              <Divider sx={{ bgcolor: "secondary.light" }} />
            </div>
          </div>
      </div>
    </>
  );
};

export default Cart;
