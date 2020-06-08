import React, { Component } from 'react'

class FavRecipeDisplay extends Component{
    constructor(){
        super();
        this.state={
            liked:false
        }
    }
    render(){
        return(
            <section className="favRecipes">
                <header className ="favHeader">
                    <div className = "wrapper">
                        <h2>people's favourite recipes</h2>
                    </div>
                </header>
                <div className="wrapper">
                    {this.props.favRecipes.length < 1 && <p>No Recipes saved yet...</p>}
                    <ul className="favRecipeList">
                        {this.props.favRecipes.map((recipeItem, i)=>{
                            let recipeName = recipeItem.recipeName
                            let recipeId = recipeItem.recipeId
                            return (
                                <li className="favRecipeContainer" key={i}>
                                    <h3>{recipeName.label}</h3>
                                    <img src={recipeName.image} alt={recipeName.label} />
                                    <button className="likeButton" onClick={()=>{
                                        this.props.likeButton(recipeName,recipeId);
                                        // this.setState({liked:true})
                                    }}>
                                    {/* // disabled={this.state.liked} */}
                                        {recipeName.like} <i class="fas fa-heart"></i>
                                    </button>
                                    <div>
                                        <a href={recipeName.url}>Full Recipe</a>
                                        <button className="delButton" onClick={(event) => {this.props.delFavRecipe(event, recipeId) }}>Delete</button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        )
    }
}


export default FavRecipeDisplay