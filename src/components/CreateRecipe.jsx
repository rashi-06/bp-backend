import React, {useState} from 'react'

const CreateRecipe = () => {

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    // userOwner: userID,
  });

  const handleNameChange = (e)=>{
    const{name , value} = e.target;
    setRecipe({...recipe , [name] : value});
  }

  const handleIngredientChange = (e , ind)=>{
    const {value} = e.target;
    const ingredients  = recipe.ingredients;
    ingredients[ind] = value
  }

  const addIngredient = (e) =>{
      setRecipe({...recipe,  ingredients : [...recipe.ingredients , ""]});
  }

  return (
    <div>
      <form className='login-form'>
        <div className='inner-login'>
          <label>Name : </label>
          <input type="text" name='name' onChange={handleNameChange} />
        </div>

        <div className='inner-login'>
          <label>Description : </label>
          <textarea type="text" name='description' />
        </div>

        <div className='inner-login'>
          <label htmlFor="ingredients">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              name="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, index)}
            />
          ))}
          
          <button type="button" onClick={addIngredient}>Add Ingredient</button>
        </div>

        <div className='inner-login'>
          <label>Instruction : </label>
          <input type="text" name='instruction' />
        </div>

        <div className='inner-login'>
          <label>Image URL : </label>
          <input type="text" name='imageUrl' />
        </div>

        <div className='inner-login'>
          <label>Cooking Time : </label>
          <input type="time" name='cookingTime'/>
        </div>

      </form>
    </div>
  )
}

export default CreateRecipe