import React from "react";
import { useState } from "react";
import axios from "axios";


 const CreateRecipe=()=>{
    const[recipe,setRecipe]=useState({
        name:"",
        instructions:"",
        ingredients:[],
        imageUrl:"",
        TimeCooking:0
    })


     const handeleChange=(event)=>{
const {name,value}=event.target
setRecipe({...recipe,[name]:value})
     }


     const handeleIngredientChange=(event,index)=>{
        const {value}=event.target
        const ing=recipe.ingredients
        ing[index]=value
        setRecipe({...recipe,ingredients:ing})
        console.log(recipe)
             }
     
     

     const addIngredient=()=>{
        setRecipe({...recipe,ingredients:[...recipe.ingredients,""]})
     }

     const onSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("http://localhost:5000/save", recipe);
          alert("Recipe Created");
        } catch (err) {
          console.log(err);
        }
      };
    return <div className="createRecipe">
        <h2>
            CreateRecipe
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text"  id="name" name="name" onChange={handeleChange} />
                <label htmlFor="Ins">Ingredients</label>
                {recipe.ingredients.map((ingredients,index)=>(
                <input key={index} 
                type="text"
                 name="ingredients"
                  value={ingredients} 
                  onChange={(event)=>handeleIngredientChange(event,index)}/>
                 ))}
                <button onClick={addIngredient} type="button">Add Ingredient</button>
                <label htmlFor="instructions">Instructions</label>
                <input type="text" name="instructions" id="instructions"  onChange={handeleChange} />
                <label htmlFor="imageUrl">ImageURL</label>
                <input type="text" name="imageURL" id="image"  onChange={handeleChange} />
                <label htmlFor="CokingTime">CokingTime (minites)</label>
                <input type="Number" id="name" name="TimeCooking" onChange={handeleChange} />

                <button onClick={onSubmit} type="submit">Create Recipe</button>

            </form>
        </h2>
        </div>
}

export default CreateRecipe;