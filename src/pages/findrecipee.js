import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const FindRecipee = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then((res) => {
        setList(res.data.recipes);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
      });
  }, []); // No need for 'list' in the dependency array

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="top-2 bottom-2">
          <input 
            className="border-2 border-black p-1 m-1" 
            type="search" 
            name="query" 
            value={query} 
            placeholder="Search items here" 
            onChange={handleInputChange} 
          />
          <Link to='/'>
            <button className="border-2 border-black p-1 m-1" type="button">Home</button>
          </Link>
        </div>
      </div> 

      <div className="flex justify-center items-center">
        <div className="sm:w-1/2">
          {list.filter((item) => 
            query.toLowerCase() === '' ? true : item.rname.toLowerCase().includes(query.toLowerCase())
          ).map((v) => (
            <div key={v._id} className="m-1 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="m-4 flex">
                <div className="h-36 w-3/5 sm:w-1/2 md:shrink-0">
                  <img
                    className="h-full w-full bg-cover bg-center"
                    src={v.image}
                    alt={v.rname}
                  />
                </div>
                <div className="p-2">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {v.rname}
                  </div>
                  <div className="block mt-1 sm:text-sm text-xs leading-tight font-medium text-black hover:underline">
                    Incredible recipe for your loved ones
                  </div>
                  <Link>
                    <button className="float">Give It a try</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FindRecipee;
