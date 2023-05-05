const { Router } = require("express");
const {getRecipe,saveRecipe,updateRecipe,deletRecipe}=require('../controllers/recipecontroller')

const router = Router();


router.get("/",getRecipe)
router.post("/save",saveRecipe);
router.put("/update/:name",updateRecipe)
router.delete('/recipe/:name',deletRecipe);

module.exports=router
