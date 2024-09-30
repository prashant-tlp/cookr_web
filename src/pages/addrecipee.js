import React, { useState } from "react";
import img from "../images/c.jpg"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const AddRecipee = () => {
  const navigate=useNavigate
  const [value,setvalue]=useState({rname:"",email:"",ingredients:"",method:"",image:""})
  const inpucss='w-full p-2 mt-2 border-2 border-black rounded-md bg-transparent opacity-50'
const handler=(e)=>{
  setvalue({...value,[e.target.name]:e.target.value})
}
const filehandler=(e)=>{
  setvalue({...value,image:e.target.files[0]})
}

  const submit=async (e)=>{
    const {rname,email,ingredients,method,image}=value
    const formdata=new FormData()
    formdata.append('rname',rname)
    formdata.append('email',email)
    formdata.append('ingredients',ingredients)
    formdata.append('method',method)
    formdata.append('image',image)
    await axios.post('http://localhost:5000/user/add-recipee', formdata)
    .then((res)=>{
      console.log(res)
    })
    .then(()=>{
      navigate('/')
    })

    
  }
  return (
      <>
        <div className="h-screen w-screen sm:flex sm:justify-center bg-cyan-300 sm:items-center ">
          <div className="p-2 rounded-lg sm:flex sm:w-5/6 gap-1  shadow-lg ">
            <form encType="multipart/form-data" method="post" className="sm:w-1/2"> 
              <label>Recipe-Name</label>
              <input type="text" name="rname" value={value.rname} className={inpucss} onChange={handler}></input>
              <label>Email</label>
              <input type="email" name="email" value={value.email} className={inpucss} onChange={handler}></input>
              <label>Ingredients</label>
              <textarea name="ingredients" className={`${inpucss} h-24`}value={value.ingredients} onChange={handler}></textarea>
              <label>Method</label>
              <textarea name="method" className={`${inpucss} h-24`} value={value.method} onChange={handler}></textarea>
              <div className="text-center"><span className="text-lg font-semibold">Upload Image : </span><input type="file" name="image" className="border-2 border-black m-1 file:"  onChange={filehandler} ></input></div>
              <div className="text-center"><button type="button" className="m-2 border-2 border-black p-2" onClick={submit}>Add-Recipe</button></div>
            </form>
            <div className="hidden mx-2  sm:block w-1/2">
              <h2 className="text-center font-bold  text-2xl">Show Your Swaaad</h2>
              <p className="text-center text-lg">seperate your ingrediwnts with comma</p>
              <img className="bg-center bg-cover" src={img} alt="foodImg"></img>
            </div>
          </div>
        </div>
      </>
  );
};

export default AddRecipee;
