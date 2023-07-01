import React from 'react'
import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';

const RecipeDetails = () => {
  const {recipeName} = useParams();
  const {state} = useData();
  const {recipeData} = state;

  const currentRecipe = recipeData.filter((recipeItem) => recipeItem.recipeName === recipeName)

  console.log(recipeName);
  return (
    <section className="recipe__section">
    <h2>RecipeDetails</h2>
    {
      currentRecipe.map((recipe)=> (
        <div className="recipe_details">
        <div>
          <img src= {recipe.img} alt={recipe.recipeName}
          width="100%"
          height="300"
          />
         
          </div>
        <div>
          <h2>{recipe.recipeName}</h2>
  <h3>Cusine: {recipe.cuisineType}</h3>
    <p><b>Ingridients :</b> {recipe.ingredients}</p>
    <p><b>Instructions: </b> {recipe.instructions}</p>
        </div>
        </div>
      ))
    }
  
    </section>
  )
}

export default RecipeDetails