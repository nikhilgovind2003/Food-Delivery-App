import { useEffect, useState } from "react";
import { assets } from "../../src/admin_assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  // Uploading images
  const [Image, setImage] = useState(false);

  // Uploading all details into an object
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Rolls",
  });

  // Fn to upload details from input to object
  const onhashchange = (e) => {
    // storing name and value into abject
    const name = e.target.name;
    const value = e.target.value;

    // setting new data into prev value
    setData((data) => ({ ...data, [name]: value }));
  };

  // Rendering the data
  useEffect(() => {
    // console.log(data);
  }, [data]);

  //
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", Image);

    // axios
    const res = await axios.post(`${url}/api/food/add`, formData);
    console.log(res.data);
    if (res.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Rolls",
      }),
        setImage(false);
      toast.success(res.data.message);
    } else {
      console.log(res.data.message);
    }
  };

  return (
    <>
      <form action="" onSubmit={onHandleSubmit} className=" px-16 ml-[18%] mt-24">
        <div className=" flex items-start w-full gap-4 my-4 flex-col">
          <p>Upload Image</p>
          <label htmlFor="file" className=" w-[150px]">
            <img
              className=" w-full h-full"
              src={Image ? URL.createObjectURL(Image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            className=" p-2 rounded-xs w-full"
            hidden
            type="file"
            name="file"
            id="file"
            required
          />
        </div>
        <div className=" flex items-start w-full gap-4 my-4 flex-col">
          <label htmlFor="name">Product Name</label>
          <input
            onChange={onhashchange}
            value={data.name}
            className=" p-2 rounded-xs w-full"
            type="text"
            placeholder="TYpe here"
            name="name"
            required
          />
        </div>
        <div className=" flex items-start w-full gap-4 my-4 flex-col">
          <label htmlFor="description">Product Description</label>
          <textarea
            onChange={onhashchange}
            value={data.description}
            className=" p-2 rounded-xs w-full"
            rows="6"
            placeholder="Write the content here"
            required
            name="description"
            id="description"
          ></textarea>
        </div>

        <div className=" flex justify-center items-center w-full gap-4 my-4">
          <div className=" flex items-start w-full gap-4 my-4 flex-col">
            <label htmlFor="category">Product Category</label>
            <select
              className=" p-2 rounded-xs w-full"
              name="category"
              id="category"
              onChange={onhashchange}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className=" flex items-start w-full gap-4 my-4 flex-col">
            <label htmlFor="price">Product Price</label>
            <input
              onChange={onhashchange}
              value={data.price}
              className=" p-2 rounded-xs w-full"
              type="Number"
              min="0"
              required
              name="price"
              placeholder="$20"
            />
          </div>
        </div>

        <input
          type="submit"
          value="ADD"
          className="bg-black text-white p-2 w-1/2"
        />
      </form>
    </>
  );
};

export default Add;
