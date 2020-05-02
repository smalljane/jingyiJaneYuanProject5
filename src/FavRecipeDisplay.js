import React, { Component } from 'react'

class FavRecipeDisplay extends Component{

    render(){
        return(
            <section className="favRecipes">
                <header className ="favHeader">
                    <div className = "wrapper">
                        <h2>See people's favourite recipes</h2>
                    </div>
                </header>
                <div className="wrapper">
                    {this.props.favRecipes.length < 1 && <p>No Recipes saved yet...</p>}
                    <div>
                        {this.props.favRecipes.map((recipeItem, i)=>{
                            let recipeName = recipeItem.recipeName
                            let recipeId = recipeItem.recipeId
                            return (
                                <li className="recipeContainer" key={i}>
                                    <h2>{recipeName.label}</h2>
                                    <img src={recipeName.image} alt={recipeName.label} />
                                    <a href={recipeName.url}>Full Recipe</a>
                                    <button name="delButton" onClick={(event) => {this.props.delFavRecipe(event, recipeId) }}>Delete</button>
                                </li>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}


export default FavRecipeDisplay