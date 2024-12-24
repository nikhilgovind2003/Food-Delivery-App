import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setlist] = useState([]);
  const getData = async () => {
    // const url = "http://localhost:4000"
    try {
      const res = await axios.get(`${url}/api/food/list`);
console.log("data:=>",res.data);

      setlist(res.data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(list);

    list.map((item) => (
       console.log(`${url}/images/` + item.image)
    ))
  
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

        <div className="overflow-y-scroll">
        {list.map((item, index) => (
            
            <div className=" grid grid-cols-5 text-center border p-4 " key={index}>
              <img src={`${url}/images/`+item.images} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p className=" bg-red-500 w-[50px] mx-auto text-white font-semibold rounded-md px-4">X</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default List;
