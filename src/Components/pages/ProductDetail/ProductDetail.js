import React, { Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import Divider from "@mui/material/Divider";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../Redux_Store/Cart/CartSlice";
import axios from "axios";

const fallbackContent = (
  <div>
    <h1>Loading....</h1>
  </div>
);

function ProductDetailFunction(props) {
  return (
    <div className="container min-w-full bg-white">
      <div className="row min-w-full flex flex-grow">
        <div className="col-1 m-1  sticky h-fit  top-32">
          <div>
            <img
              onClick={() => {
                props.setImg(props.product.image);
              }}
              className="my-1 border border-1 border-black"
              src={props.product?.image}
              alt="Loading"
            />
          </div>
        </div>
        <div className="col-4 sticky h-fit  top-28 m-1 p-1 bg-white">
          <div>
            <img
              className="my-1 border border-1 border-black "
              style={{
                height: "400px",
                width: "350px",
              }}
              src={props.img || props.product.image}
              alt="Loading"
            />
          </div>
        </div>
        <div className="col-4 m-1 p-1 h-fit bg-inherit">
          <div>
            <h5 className="font-normal p-1 m-1">{props.product.title}</h5>
            <p className="text-muted m-2 text-sm text-blue-700">Brand:Amazon</p>
            <Divider
              sx={{
                bgcolor: "primary.light",
              }}
            />

            <div className="flex flex-row  mx-1 text-sm text-blue-700">
              <span className="flex mr-3">
                {" "}
                {Array(parseInt(props.product.rating.rate))
                  .fill()
                  .map((_, i) => (
                    <StarIcon
                      className="h-5 flex flex-col text-yellow-500 justify-start color-yellow-400"
                      key={i}
                    ></StarIcon>
                  ))}
              </span>
              <p className="mr-2">{props.product.rating.count}</p>
              <span>ratings</span>
            </div>
            <p className="font-bold m-2 text-xl">
              ₹{parseFloat(props.product.price).toFixed(2)}
            </p>
            <p className="font-normal m-2 text-sm text-decoration-line-through text-muted">
              <span className="font-semibold mx-1">MRP</span>₹
              {parseFloat(
                props.product.price + 3 * props.product.price
              ).toFixed(2)}
            </p>
            <p className="m-2 text-sm text-muted">Inclusive of all the taxes</p>

            <Divider
              sx={{
                bgcolor: "secondary.light",
              }}
            />

            <p className="m-2">{props.product.description}</p>
            <p className="m-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus fugit provident quasi perferendis eligendi quam
              possimus, deleniti praesentium voluptatibus consequuntur odit
              ullam tempora ipsum temporibus distinctio sunt voluptatum quo
              aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Eius error atque illum magni dolor aspernatur quos tenetur,
              consequatur rem, commodi est quas doloribus velit? Quod dolores
              voluptatibus veritatis doloremque alias!
            </p>
          </div>
        </div>
        <div className="col-2   sticky h-fit  top-28 m-auto mt-2 p-1 bg-white border border-1 border-black p-3">
          <div className="flex flex-col">
            <p className="font-semibold m-2 text-2xl">
              ₹{parseFloat(props.product.price).toFixed(2)}
            </p>
            <p className="lead">Free delivery </p>
            <p className="text-sm">
              Sold by {"Appario Retail Private Limited"} and
            </p>
            <p className="text-sm">fulfilled by {"amazon"}</p>
            <p className="text-green-500 font-normal">In stock</p>

            <button
              onClick={() => {
                props.dispatch(
                  cartActions.addItemToCart({
                    id: props.product.id,
                    price: props.product.price,
                    title: props.product.title,
                    img: props.product.image,
                    description: props.product.description,
                  })
                );
              }} // className="bg-yellow-400 p-1 m-2 rounded-2xl text-sm"
              className="amazonbutton"
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                props.navigate("/cart");
              }} // className="bg-yellow-400 p-1 m-2 rounded-2xl text-sm"
              className="amazonbutton"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="lead text-yellow-600 m-2 p-2 ">
          <h3 className="display-5">Product specifications</h3>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aperiam numquam commodi in cupiditate reiciendis nulla, obcaecati
          inventore. Maiores sit tempore aut, dolores blanditiis quis adipisci
          molestiae illum eveniet iste!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aperiam numquam commodi in cupiditate reiciendis nulla, obcaecati
          inventore. Maiores sit tempore aut, dolores blanditiis quis adipisci
          molestiae illum eveniet iste!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aperiam numquam commodi in cupiditate reiciendis nulla, obcaecati
          inventore. Maiores sit tempore aut, dolores blanditiis quis adipisci
          molestiae illum eveniet iste!
        </div>
      </div>
    </div>
  );
}

const ProductDetail = () => {
  let params = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  let [product, setProduct] = React.useState();
  let [img, setImg] = React.useState(product?.image);
  const [err, setErr] = React.useState();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3030/products/${params.productId}`)
      .then((res) => {
        console.log("response:", res.data);
        setLoading(false);
        setProduct(res.data[0]);
      })
      .catch((error) => {
        setLoading(false);

        let e = error.message;
        setErr(e);
        console.log("error:", e);
      });
  }, []);

  return (
    <Suspense fallback={{ fallbackContent }}>
      <React.Fragment>
        {loading && (
          <div>
            <h1>Loading</h1>
          </div>
        )}
        {!err && product ? (
          <ProductDetailFunction
            dispatch={dispatch}
            naviagatea={navigate}
            product={product}
            img={img}
            setImg={setImg}
          ></ProductDetailFunction>
        ) : (
          <div>
            <h1>{err}</h1>
          </div>
        )}
      </React.Fragment>
    </Suspense>
  );
};

export default ProductDetail;
