import React, { useState } from 'react'
import { useData } from '../context/DataContext';
import { FaArrowRight} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AddRecipe from '../components/AddRecipe';

const Home = () => {
  const navigate = useNavigate();
  const {state, dispatch}= useData();
  const {recipeData } = state;
  const [searchInput, setSearchInput] = useState('');
  const [filterOption, setFilterOption] = useState('recipeName');
  
  const filteredRecipes = recipeData.filter(recipe => {
    if (filterOption === 'recipeName') {
      return recipe.recipeName.toLowerCase().includes(searchInput.toLowerCase());
    } else if (filterOption === 'cuisineType') {
      return recipe.cuisineType.toLowerCase().includes(searchInput.toLowerCase());
    } else if (filterOption === 'ingredients') {
      return recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput.toLowerCase()));
    }
    return false;
  });
  

 <div>
  <input
    type="text"
    placeholder="Search"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
  />
  <div>
    <label>
      <input
        type="radio"
        value="recipeName"
        checked={filterOption === 'recipeName'}
        onChange={() => setFilterOption('recipeName')}
      />
      Recipe Name
    </label>
    <label>
      <input
        type="radio"
        value="cuisineType"
        checked={filterOption === 'cuisineType'}
        onChange={() => setFilterOption('cuisineType')}
      />
      Cuisine Type
    </label>
    <label>
      <input
        type="radio"
        value="ingredients"
        checked={filterOption === 'ingredients'}
        onChange={() => setFilterOption('ingredients')}
      />
      Ingredients
    </label>
  </div>
</div>


  return (
    <section className="recipe__section">
     <div>
  <input
    type="text"
    placeholder="Search"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
  />
  <div>
    <label>
      <input
        type="radio"
        value="recipeName"
        checked={filterOption === 'recipeName'}
        onChange={() => setFilterOption('recipeName')}
      />
      Recipe Name
    </label>
    <label>
      <input
        type="radio"
        value="cuisineType"
        checked={filterOption === 'cuisineType'}
        onChange={() => setFilterOption('cuisineType')}
      />
      Cuisine Type
    </label>
    <label>
      <input
        type="radio"
        value="ingredients"
        checked={filterOption === 'ingredients'}
        onChange={() => setFilterOption('ingredients')}
      />
      Ingredients
    </label>
  </div>
</div>

    



      <h2>All Recipies:</h2>
      <div className="card__container">
        {filteredRecipes.map(({ id,img,recipeName, cuisineType}) =>(
          <div className="card">
            <img src={img} alt={recipeName} 
            width="100%" height="300"
            />
            <h4>{recipeName}</h4>
            <p><b>Cuisine Type: </b> {cuisineType}</p>
            <p
            className="recipe__info"
            onClick={()=> navigate(`/recipeDetail/${recipeName}`)}
            ><b>Ingredients :</b> See Recipe <FaArrowRight /></p>
            <p
              className="recipe__info"
            onClick={()=> navigate(`/recipeDetail/${recipeName}`)}
            ><b>Instructions :</b>See Recipe <FaArrowRight /></p>
            <button
            onClick={()=>dispatch({type:"DELETE", payload:id })}
            >delete</button>
            </div>
        ))}
        
      </div>
      <button>Add recipe</button>
        <AddRecipe />

    </section>
  )
}

export default Home