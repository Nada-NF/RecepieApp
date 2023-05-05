const mongoose=require('mongoose')
const recipeSchema = new mongoose.Schema({
    name:{type : String,
          require:true
},
ingredients:{type : String,
    require:true
},
imageURL:{type : String,
        require:false
    },
 TimeCooking:{type : Number,
            require:false},
instructions:{type:String,
        require:false}
    
    
})
const recipe=mongoose.model('Recipe',recipeSchema)

module.exports = recipe;
