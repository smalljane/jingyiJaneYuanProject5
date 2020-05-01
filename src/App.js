import React,{Component} from 'react';
import axios from 'axios';
import Form from './Form.js'
import FavRecipeDisplay from './FavRecipeDisplay.js';
import firebase from './firebase.js';
// import swal from '@sweetalert/with-react';
// // font awsome
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './styles/styles.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      recipeArray:[],
      userInput: '',
      // addRecipe: true,
      // removeRecipe: false,
      favRecipes: []
    }
    // this.resultRef = React.createRef();
  }

  // smooth scroll to result section
  // smoothScroll = () => {
  //   let element = this.resultRef.current
  //   element.scrollIntoView({behavior:'smooth', block:'start'})
  // }
  // call functions when component did mount
  componentDidMount(){
    this.getRecipe();
    this.loadFirebase();
  }

  // firebase data
  loadFirebase = () => {
    const dbRef = firebase.database().ref();
    dbRef.on('value',(response) => {
      const newFavRecipes = [];
      const data = response.val();

      for (let item in data) {
        newFavRecipes.push(data[item]);
      }

      this.setState({
        favRecipes: newFavRecipes
      })
    })
  }


  // axios api 
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
      console.log(res)
      this.setState({
        recipeArray: res.data.hits
      })
      // this.smoothScroll();
    })
  }

  handleUserInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.getRecipe();
    event.preventDefault();
      this.setState({
        userInput: event.target.value
      }, () => this.getRecipe())
    // if (this.state.userInput !== '') {
    // }
  }

  // add recipe to favourite list in firbase when click 'save' button
  addFavRecipe = (event,recipeItem) =>{
    event.preventDefault();
    const dbRef = firebase.database().ref()
    dbRef.push(recipeItem);
    console.log(recipeItem)

  }

  // function to remove restaurant from favourite list in firebse when click 'delete' button
  delFavRecipe = () =>{

  }


  render(){
    return (
      <div className="App">
        <header className = "landingHeader">
          <div className ="wrapper">
              <h1>COOKS <span>'R'</span> US</h1>
              <p>What to Cook</p>
              <form action="">
                <input name= "userInput" type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="enter an ingredient eg.beef" />
                <button type="submit" onClick = {this.handleSubmit}>Find Yum</button>
              </form>
          </div>
        </header>
        <main>
          <ul className="recipeList">
            {this.state.recipeArray.map((recipe,i)=>{
              let recipeItem = recipe.recipe
              return(
                <li className= "recipeContainer" key={i}>
                  <h2>{recipeItem.label}</h2>
                  <img src={recipeItem.image} alt={recipeItem.label}/>
                  <a href={recipeItem.url}>Full Recipe</a>
                  <button name="favButton" onClick = {(event)=>{this.addFavRecipe(event,recipeItem)}}>Save it</button>
                </li>
              )
            })}

          </ul>
        </main>
  
        

        <FavRecipeDisplay 
        favRecipes = {this.state.favRecipes}/>
        <footer>
          <p>Copyright Jane Yuan 2020</p>
        </footer>
  
      </div>
    );
  }
}

export default App;
