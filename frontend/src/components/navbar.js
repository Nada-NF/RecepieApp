import React from "react";
import { Link } from "react-router-dom";

 const Navbar=function(){
    return <div className="navbar"> 
    <Link to="/">Home</Link> 
    <Link to="/CreateRecipe">CreateRecipe</Link>
    </div>

}
export default Navbar ;