import { useState } from "react"
import Explore from "../Component/Explore"
import Header from "../Component/Header"
import FoodDisplay from "../Component/FoodDisplay"


const Home = () => {
  const [item, setItem] = useState("All")

  return (
    <div>
        <Header />
        <Explore items={item} setItem={setItem} />
        <FoodDisplay category={item} setCategory={setItem} /> 
    </div>
  )
}

export default Home