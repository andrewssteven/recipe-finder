import React, { useState } from "react";
import { recipes } from "./recipe";
import Recipecard from "../components/Recipecard";

const App = () => {
  const [recipe, setRecipe] = useState(null);
  const [query, setQuery] = useState("");

  // function to find recipe base on input and return error if not found
  const findRecipe = (query) => {
    setQuery(query);
    // if the input is empty (or only whitespace), clear results and exit
    if (!query || !query.trim()) {
      setRecipe(null);
      return;
    }

    // find recipe using query entered and set display to recipe found
    const foodRecipe = recipes.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    // if no matches, set recipe to null so the "not available" message can show
    if (foodRecipe.length === 0) {
      setRecipe(null);
      return;
    }

    setRecipe(foodRecipe);
  };

  return (
    <main>
      <h2>Recipe Finder</h2>
      <p>Find easy, delicious recipes to cook and enjoy anytime, anywhere.</p>
      <div id="input">
        <input
          type="text"
          placeholder="Find a food recipe"
          value={query}
          onChange={(e) => findRecipe(e.target.value)}
        />
      </div>
      <div id="recipe-container">
        {
          // return details about recipe is found
          recipe
            ? recipe.map((recipe, index) => (
                <Recipecard key={index} {...recipe}/>
              ))
            : // return error if recipe is not found
              query && (
                <h3>{`Sorry!!, recipe for ${query} is currently not available`}</h3>
              )
        }
      </div>
    </main>
  );
};

export default App;
