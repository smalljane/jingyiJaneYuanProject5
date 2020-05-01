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
                            return (
                                <li className="recipeContainer" key={i}>
                                    <h2>{recipeItem.label}</h2>
                                    <img src={recipeItem.image} alt={recipeItem.label} />
                                    <a href={recipeItem.url}>Full Recipe</a>
                                    {/* <button name="favButton" onClick={(event) => { this.addFavRecipe(event, recipeItem) }}>Save it</button> */}
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