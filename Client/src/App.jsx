import {useForm} from "react-hook-form"
import axios from "axios"
import './App.css'
import { useState } from "react"

function App() {
  const {register , handleSubmit, formState:{errors}, } = useForm()

  const [fetchedData, setFetchedData] = useState("No Calc performed yet")

  const onSum = async(data)=>{
    const summ =await  axios.get(`http://localhost:3000/sum/${data.numOne}/${data.numTwo}/${data.op}`);
    setFetchedData(`${data.numOne} ${data.op} ${data.numTwo} = ${summ.data.ans}`);
   
  }
  return (
    <>
     <form action="" onSubmit={handleSubmit(onSum)}>
      <input type="text" name="num1" placeholder="Enter Number 1" {...register("numOne")}/>
      <input type="text" name="num2" placeholder="Enter Number 2" {...register("numTwo")}/>
      <select {...register("op")}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="submit" value="Let's do it" />
     </form>
      <div>
        The Last calculation was: {fetchedData}
      </div>
    </>
  )
}

export default App
