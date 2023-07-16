import React from 'react'
import { Link } from 'react-router-dom'
import {useCookies} from 'react-cookies';
import "../App.css"

const Navbar = () => {

  const [cookies , setCookies] = useCookies(["access_token"]);

  return (
    <header className='nav'>
        <div className='nav-links name'>
          <Link to={"/"} className='links'>Baker's Point</Link>
        </div>
        <div className='nav-links'>
            <Link to={"/"} className='links'>Home</Link>
            <Link to={"/createRecipe"} className='links'>CreateRecipe</Link>
            <Link to={"/savedRecipes"} className='links'>SavedRecipes</Link>
            <Link to={"/login"} className='links'>Login</Link>

        </div>
    </header>
  )
}

export default Navbar