import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import Loading from "../components/loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
    const buttonCss="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
  
    const [list,setList]=useState([])
  
    const [isLoading,setLoading]=useState(false)
  
    const [islogged,setLogin]=useState(false)

    const navigate=useNavigate()

    useEffect(()=>{
      const email=sessionStorage.getItem('email')
      const token=sessionStorage.getItem('token')
        if(email!=null && token!==null){
          setLogin(true)
        }
        else{
          setLogin(false)
        }

    })
  
    const getData=()=>{
      setLoading(true)
      axios.get('http://localhost:5000/user/recipees')
      .then((res)=>{
        setList(...list,res.data.result)
        setLoading(false)
      })
      .catch((err)=>{
        setLoading(true)
        toast(err)
        setLoading(false)
        
      })
  
    }
    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
      {isLoading ?( <Loading/>) :
      (
        <div>
        <div className=" mx-auto mt-2 flex flex-wrap justify-evenly">
        <div>
          <Link to={`${islogged ? "/addrecipee" : "/signup"}`}><button className={buttonCss}>Add-Recipee</button></Link>
          <Link to='/findrecipee'><button className={buttonCss}>Find-Recipee</button></Link>
        </div>
        {
          islogged ?
          <div>
            <Link ><button className={buttonCss} onClick={()=>{sessionStorage.clear();navigate('/')}} >Log-Out</button></Link>
            <Link to='/my-recipe'><button className={buttonCss} >My-Recipees</button></Link>
          </div>:
           <div><Link to='/login'><button className={buttonCss} >Login</button></Link></div>
          
        }
      </div>

      <div className=" sm:grid sm:grid-cols-3 gap-1">
        {list.map((v,i)=>
          <div key={v._id} className="m-1  bg-white rounded-xl shadow-md overflow-hidden ">
          <div  className="m-4 flex ">
            <div className=" h-36 w-3/5 sm:w-1/2 md:shrink-0">
              <img
                className="h-full w-full  bg-cover bg-center hover:h-full hover:w-full hover:z-auto md:h-full md:w-full"
                src={require(`../images/${v.image}`)}
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
      </div>)
      
      }
      <ToastContainer/>
    </div>
    
  )
}

export default Home