import React, { useEffect, useState } from "react";
import axios from "axios";


 const Home=()=>{
    const [recipes, setRecipes] = useState([]);
    
  
    
  
    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get("http://localhost:5000");
          setRecipes(response.data);
          console.log(response.data);
        } catch (err) {
          console.log(err);
        }
      };
  
    
  
      fetchRecipes();
   
    }, []);
  
    const deleteRecipe = async (name) => {
      try {
        await axios.delete(`http://localhost:5000/recipe/${name}`);
        const newRecipes = recipes.filter((recipe) => recipe.name !== name);
        setRecipes(newRecipes);
      } catch (err) {
        console.log(err);
      }
    };
    
    
  
    return (
      <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.name}>
              {console.log(recipe.imagURL)}
              <div>
                <h2>{recipe.name}</h2>
              
              </div>
              <div className="instructions">
                <p>{recipe.instructions}</p>
              </div>
              <img src={recipe.imageURL} alt={recipe.name} />
              <p>Cooking Time: {recipe.cookingTime} minutes</p>
              <button onClick={() => deleteRecipe(recipe.name)}>&times;</button>
            </li>
          ))}
          
        </ul>
      </div>
    );
}
export default Home;