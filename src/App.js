import React,{Component} from 'react';
import axios from 'axios';
import FavRecipeDisplay from './FavRecipeDisplay.js';
import firebase from './firebase.js';
import './styles/styles.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipeArray:[],
      userInput: '',
      favRecipes: []
    }
    this.resultRef = React.createRef();
  }

  // smooth scroll to result section
  smoothScroll = () => {
    let element = this.resultRef.current
    element.scrollIntoView({behavior:'smooth', block:'start'})
  }
  // call functions when component did mount
  componentDidMount(){
    // this.getRecipe();
    // firebase call to retrieve data when compnent did mount
    this.loadFirebase();
  }

  // firebase data
  loadFirebase = () => {
    const dbRef = firebase.database().ref();
    dbRef.on('value',(response) => {
      const newFavRecipes = [];
      const data = response.val();
      // unshift put newest things at the front
      for (let key in data) {
        newFavRecipes.unshift({recipeName:data[key], recipeId:key});
      }

      this.setState({
        favRecipes: newFavRecipes
      })
    })
  }

  // axios call to edamam api to retrieve recipe data based on user input
  getRecipe = () => {
    const url = 'https://api.edamam.com/search';
    const key = '8fdecc405895d8341b252e3287ad7566';
    const id = 'dd773a12';
    axios({
      url: url,
      method:'GET',
      params:{
        app_id:id,
        app_key:key,
        format:'jason',
        q:this.state.userInput,
        imgonly:true
      }
    }).then((res)=>{
      // return an object that holds recipes data
      this.setState({
        recipeArray: res.data.hits
      })
      // smooth scroll to result page once API call is made
      if (this.state.recipeArray.length > 0){
        this.smoothScroll();
      }
    })
  }

  
  handleUserInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // update userInput value when user hit enter/submit button and call API function
  handleSubmit = (event) => {
    this.getRecipe();
    event.preventDefault();
      this.setState({
        userInput: event.target.value
      }, () => this.getRecipe())
      if (this.state.userInput == '') {
        alert('please enter an ingredient')
      }
  }

  // add recipe to favourite list in firbase when click 'save' button
  addFavRecipe = (event,recipeItem) =>{
    event.preventDefault();
    const dbRef = firebase.database().ref()
    dbRef.push(recipeItem);
  }

  // function to remove restaurant from favourite list in firebse when click 'delete' button
  delFavRecipe = (event,recipeId) =>{
    event.preventDefault();
    const dbRef = firebase.database().ref()
    dbRef.child(recipeId).remove();
  }

  // handle like button click
  handleLike = (recipeName,recipeId)=> {
    recipeName.like = recipeName.like+1
    const dbRef = firebase.database().ref(recipeId)
    dbRef.update({
      like:recipeName.like
    })
  }


  render(){
    return (
      <div className="App">
        <header className = "landingHeader">
          <div className = "backgroundColor">
            {/* landing page */}
            <div className ="wrapper headerContent">
                <h1>COOKS <span>'R'</span> US</h1>
                <p>What to Cook</p>
                {/* user input and search button*/}
                <form action="">
                  <input name="userInput" type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="enter an ingredient eg.egg" required="true" />
                  <button name ="search"className="submitButton" type="submit" onClick = {this.handleSubmit}>Find Yum</button>
                </form>
                <p className="note">Note:you can only search up to 5 times / minute</p>
            </div>
          </div>
        </header>
        <main ref={this.resultRef}>
          {/* map out each recipes in the recipe array */}   
          <ul className="wrapper recipeList">
            {this.state.recipeArray.map((recipe,i)=>{
              let recipeItem = recipe.recipe
              // add 'like' key into the object, initial value 0
              recipeItem['like'] = 0
              return(
                <li className= "recipeContainer" key={i}>
                  <h2>{recipeItem.label}</h2>
                  <img src={recipeItem.image} alt={recipeItem.label}/>
                  <div>
                    <a href={recipeItem.url}>Full Recipe</a>
                    <button className="favButton" 
                    onClick = {(event)=>{
                      this.addFavRecipe(event,recipeItem)
                      alert ('Scroll down to see your saved recipe!')
                      }}>Save it</button>
                  </div>
                </li>
              )
            })}

          </ul>
        </main>
        {/* Favourite recipes page */}
        <FavRecipeDisplay 
        favRecipes = {this.state.favRecipes}
        delFavRecipe = {this.delFavRecipe}
        likeButton = {this.handleLike}/>
{/* ----------------------------------------Footer----------------------------------- */}
        <footer>
          <p>Copyright <span aria-hidden="true">&copy;</span> 2020 by <a href="https://www.itsjaneyuan.com" target="_blank">Jane Yuan</a></p>
        </footer>
  
      </div>
    );
  }
}

export default App;
