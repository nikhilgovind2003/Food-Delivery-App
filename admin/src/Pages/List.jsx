import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const List = () => {
  const [list, setlist] = useState([])
  const getData = async () => {
    const url = "http://localhost:4000"
    const res = axios.get(`${url}/food/add/list`)

    if (res.data.success) {
      setlist(res.data.data)
    }
    else {
      toast.error("Error")
    }
  }


  useEffect(() => {
    getData()
  
  }, [])
  

  return (
    <div>
      {list}
    </div>
  )
}

export default List