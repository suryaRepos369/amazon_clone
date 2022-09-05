import { autocompleteClasses, Box } from "@mui/material";
import { shadows } from "@mui/system";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { Link } from "react-router-dom";
import React from "react";
import { dressActions } from "../../Redux_Store/Dresses/dressSlice";
import { useDispatch } from "react-redux";
const MIN_RATING = 1;
const MAX_RATING = 5;

const Products = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const [rating, setRating] = React.useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const addCartHandler = (title) => {
    dispatch(dressActions.addDress(title));
  };

  return (
    <Box
      className=" m-auto p-2 border overflow-clip border-gray-200 relative flex  flex-col flex-shrink flex-grow bg-white"
      sx={{
        focus: "cursor-pointer",
        display: "flex",
        shadows: 6,
        margin: { md: 0.5 },

        justifyContent: "space-around",

        width: { xs: 1, sm: "fit-content", md: "fit-content" },
        height: 550,
        borderRadius: "4px",

        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "white",
        },
      }}
    >
      <p className="p-0 absolute top-0 right-0  text-xs italic text-gray-400">
        {category}
      </p>
      <div className="rounded-md  bg-gray-100 flex  justify-center hover:cursor-pointer">
        <img
          className="hover:scale-110 transition duration-600"
          onClick={() => {
            addCartHandler(title);
          }}
          style={{
            backgroundColor: "inherit",
            marginTop: "30px",
            borderRadius: "10px",
            maxWidth: { xs: 600, md: 350 },
            maxHeight: "150px",
          }}
          src={image}
          alt=""
        />
      </div>
      <h4 className="m-1  flex flex-wrap line-clamp-2 bg-white min-w-10">
        {title}
      </h4>
      <div className="flex mx-1">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon
              className="h-5 text-yellow-500 justify-start color-yellow-400"
              key={i}
            ></StarIcon>
          ))}
      </div>
      <span className="mx-2 font-bold">
        <Currency quantity={price} currency="INR"></Currency>
      </span>
      {1 && (
        <div className=" flex justify-center space-x-1 px-1">
          <img className="w-11" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-400 mt-3">
            Free {"nextday"} delivery Available
          </p>
        </div>
      )}

      <p className="px-2 my-1 text-[12.5px] line-clamp-3">{description}</p>
      {/* <button className="p-2 bg-yellow-300">Add to cart</button> */}
      <button
        className="amazonbutton "
        onClick={() => {
          addCartHandler(title);
        }}
      >
        Add to cart
      </button>
    </Box>
  );
};

export default Products;
