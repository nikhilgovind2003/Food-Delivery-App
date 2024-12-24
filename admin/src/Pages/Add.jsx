import { useEffect, useState } from "react";
import { assets } from "../../src/admin_assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [Image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(assets.upload_area); // Default preview image
  

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Rolls",
    image: ""
  });

  // Update form data for text fields
  const onhashchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // Use FileReader to handle the image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Set the file for upload

    // Use FileReader to create a base64 preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result); // Set preview image as base64
    };
    if (file) {
      reader.readAsDataURL(file); // Trigger onloadend
    }
  };

  // Submit form data
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", Image); // Append file for server upload

    try {
      const res = await axios.post(`${url}/api/food/add`, formData);
      console.log(res.data);
      if (res.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Rolls",
          image: ""
        });
        setImage(null);
        setPreviewImage(assets.upload_area); // Reset preview image
        toast.success(res.data.message);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.error("Error uploading data:", error);
      toast.error("Failed to upload data.");
    }
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className="px-16 ml-[18%] mt-24">
        <div className="flex items-start w-full gap-4 my-4 flex-col">
          <p>Upload Image</p>
          <label htmlFor="file" className="w-[150px]">
            <img
              className="w-full h-full"
              src={previewImage} // Display preview image
              alt="Preview"
            />
          </label>
          <input
            onChange={handleImageChange}
            className="p-2 rounded-xs w-full"
            hidden
            type="file"
            name="file"
            id="file"
            required
          />
        </div>
        <div className="flex items-start w-full gap-4 my-4 flex-col">
          <label htmlFor="name">Product Name</label>
          <input
            onChange={onhashchange}
            value={data.name}
            className="p-2 rounded-xs w-full"
            type="text"
            placeholder="Type here"
            name="name"
            required
          />
        </div>
        <div className="flex items-start w-full gap-4 my-4 flex-col">
          <label htmlFor="description">Product Description</label>
          <textarea
            onChange={onhashchange}
            value={data.description}
            className="p-2 rounded-xs w-full"
            rows="6"
            placeholder="Write the content here"
            required
            name="description"
            id="description"
          ></textarea>
        </div>
        <div className="flex justify-center items-center w-full gap-4 my-4">
          <div className="flex items-start w-full gap-4 my-4 flex-col">
            <label htmlFor="category">Product Category</label>
            <select
              className="p-2 rounded-xs w-full"
              name="category"
              id="category"
              onChange={onhashchange}
              value={data.category}
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
          <div className="flex items-start w-full gap-4 my-4 flex-col">
            <label htmlFor="price">Product Price</label>
            <input
              onChange={onhashchange}
              value={data.price}
              className="p-2 rounded-xs w-full"
              type="number"
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
