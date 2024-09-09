import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({ url }) => {
  // const url = "http://localhost:4000"
  const [list, setlist] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);

      setlist(res.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(list);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" lg:px-12 lg:py-8 p-4 w-full mt-24 lg:ml-[18%]">
      <h1 className=" mb-8 text-black text-2xl font-bold">All Food Lists</h1>
        <div className=" w-full flex text-lg mx-auto">
          <b className="border-2 p-4 w-full text-center border-black">Image</b>
          <b className="border-2 p-4 w-full text-center border-black">Name</b>
          <b className="border-2 p-4 w-full text-center border-black">Category</b>
          <b className="border-2 p-4 w-full text-center border-black">Price</b>
          <b className="border-2 p-4 w-full text-center border-black">Action</b>
        </div>

        <div>
          {list.map((item, index) => (
            <div className=" grid grid-cols-5 text-start" key={index}>
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p>X</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
