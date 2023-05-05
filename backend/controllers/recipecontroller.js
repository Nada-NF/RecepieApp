const mongoose = require('mongoose');
const express = require('express')
const recipe =require('../models/recipeModel')

module.exports.getRecipe = async (req, res) => {
    try{
        const data = await recipe.find()
        res.status(201).json(data);
    }catch(err){
        res.status(500).json({message:"error"})
    console.log(err)}
}

module.exports.saveRecipe = async (req, res) => {
  const data = await recipe.find();
  const { name, ingredients, imageURL, instructions, TimeCooking } = req.body;

  try {
    await recipe.create({
      name: name,
      instructions: instructions,
      ingredients: ingredients.join(", "),
      imageURL: imageURL,
      TimeCooking: TimeCooking,
    });
    console.log("Added Successfully...");
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};


module.exports.updateRecipe = async (req, res) => {
    try {
      const {  ingredients } = req.body;
      const name=req.params.name
      const result = await recipe.updateOne({ name: name }, {  ingredients });
      console.log(result);
      res.send(result);
    } catch (err) {
      res.status(400).send(err);
    }
  };


  module.exports.deletRecipe = async (req, res) => {
    const { name } = req.params;
    try {
        await recipe.findOneAndDelete({ name: name });
        res.status(201).send("Deleted successfully...");
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
};



