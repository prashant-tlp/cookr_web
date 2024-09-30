import React,{ useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";



const FindRecipee = () => {
  const [query,setQuery]=useState('')
  const [list,setList]=useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/recipes')
    .then((res)=>{
      setList(...list,res.data.recipes)
    })
  },[])
  const handler=(e)=>{
    setQuery(e.target.value)
  }

  

  return (
      <>
        <div className="">
          <div className=" flex justify-center items-center">
          <div className=" top-2 bottom-2">
            <input className="border-2  border-black p-1 m-1" type="search" name="query" value={query} placeholder="search items here" onChange={handler} ></input>
            <Link to='/'><button className="border-2 border-black p-1 m-1" type="button" >Home</button></Link>
          </div>
          </div> 
          <div className=" flex justify-center items-center">
          <div className="sm:w-1/2">
        {list.filter((items)=>{ return query.toLowerCase()=== ''? items : items.rname.toLowerCase().includes(query)}).map((v,i)=>
          <div key={v._id} className="m-1  bg-white rounded-xl shadow-md overflow-hidden ">
          <div  className="m-4 flex ">
            <div className=" h-36 w-3/5 sm:w-1/2 md:shrink-0">
              <img
                className="h-full w-full  bg-cover bg-center hover:h-full hover:w-full hover:z-auto md:h-full md:w-full"
                src={`${v.image}`}
                alt="Modern building architecture"
              />
            </div>
            <div className="p-2">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {v.rname}
              </div>
              <div className="block mt-1 sm:text-sm text-xs leading-tight font-medium text-black hover:underline">
                Incredible Recipee for ypour loved ones
              </div>
              <Link><button className="float" >Give It a try</button></Link>
            </div>
          </div>
        </div>
        )}

      </div>
          </div>
        </div>
      </>

  );
};

export default FindRecipee;
