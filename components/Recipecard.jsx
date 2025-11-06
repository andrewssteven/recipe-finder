import React from 'react'

const Recipecard = ({image, name, shortDescription, ingredients, instructions, preparationTime }) => {
  return (
    <div id="recipeCard">
                  <img src={image} alt="food image" />
                  <h2>{name}</h2>
                  <p>{shortDescription}</p>
                  <p><span id="preparationTag">Preparation Time: </span>{preparationTime}</p>
                  <h4>Ingredients</h4>
                  <ul>
                    {
                      ingredients.map((ingredient,index)=>(
                        <li key={index}>{ingredient}</li>
                      ))
                    }
                  </ul>
                  <h4>Instruction</h4>
                  <p>{instructions}</p>
                </div>
  )
}

export default Recipecard