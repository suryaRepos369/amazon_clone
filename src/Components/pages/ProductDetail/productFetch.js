import axios from "axios";
const fetchproduct = async (id) => {
  try {
    let response = await axios.get(`http://localhost:3000/products/${id}`);
    console.log("response:", response.data);
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchproduct;
