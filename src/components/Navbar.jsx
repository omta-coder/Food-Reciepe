import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState("");

  const submithandler = (e) =>{
    e.preventDefault();
    navigate(`/search/${input}`);
    setInput("");
  }

  return (
    <>
    <div className="nav">
        <div className="left">
          <Link to="/" className='link'>
            <h2>React Food App</h2>
          </Link>
        </div>
        <div className="search">
          <form onSubmit={submithandler} >
            <input 
            onChange={(e)=>setInput(e.target.value)}
            type="text" 
            />
          </form>  
        </div>
        <div className="right">
          <Link to={`/category/Indian`} className='link'>
            <div>Indian</div>
          </Link>
          <Link to={`/category/American`} className='link'> 
            <div>American</div>
          </Link>
          <Link to={`/category/British`} className='link'> 
            <div>British</div>
          </Link>
          <Link to={`/category/Chinese`} className='link'> 
            <div>Chinese</div>
          </Link>
          <Link to={`/category/Thai`} className='link'> 
            <div>Thai</div>
          </Link>
        </div>
    </div>
    </>
  )
}

export default Navbar