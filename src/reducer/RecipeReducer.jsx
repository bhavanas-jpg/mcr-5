import React from 'react'
import { recipes } from "../data/RecipeData"
const RecipeReducer = () => {

 const initialState={
    recipeData : recipes
}

const recipeReducer =(state,action)=>{
    switch(action.type){

        case "ADD":
            console.log(action.payload)
            return{
                ...state,
                recipeData: [...state.recipeData, action.payload]
            }
        case "DELETE":
            const remainRecipes = state.recipeData.filter(({id})=> id !== action.payload);
            return{
                ...state,
                recipeData: [...remainRecipes]
            }


        default:
            return null;
    }
}

  return {initialState, recipeReducer}
}

export default RecipeReducer