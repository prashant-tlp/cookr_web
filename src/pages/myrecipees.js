import axios from 'axios'
import React, { useEffect, useCallback ,useState } from 'react'

function MyRecipees() {
  const [list,setList]=useState([])

  const email= sessionStorage.getItem('email')

  const getData= useCallback (()=>{
    axios.get('http://localhost:5000/user/my-recipee/'+email)
    .then((res)=>{
        setList(...list,res.data.result)
    })
  },[email,list])

  useEffect(()=>{
    getData()
  },[getData])

  return (
    <div>
      {list.map((val,i)=>
        <ul key={val._id}>
          <li>{val.rname}</li>
        </ul>
      )}

    </div>
  )
}

export default MyRecipees