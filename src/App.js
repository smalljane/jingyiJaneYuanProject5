import React,{Component} from 'react';
import axios from 'axios';
import Form from './Form.js'
import RecipeDisplay from './RecipeDisplay.js';
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
      userInput: ''
    }
  }

  
  // api call
  componentDidMount(){
    this.getRecipe();
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

  render(){
    return (
      <div className="App">
        <header>
          <div className ="wrapper">
              <h1>COOKS <span>'R'</span> US</h1>
              <p>What to Cook</p>
              <form action="">
                <input name= "userInput" type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="enter an ingredient eg.beef" />
                <button type="submit" onClick = {this.handleSubmit}>Find Yum</button>
              </form>
          </div>
          <ul className="recipeList">
            {this.state.recipeArray.map((recipe,i)=>{
              return(
                <li className= "recipeContainer" key={i}>
                  <h2>{recipe.recipe.label}</h2>
                  <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                  <a href={recipe.recipe.url}>Full Recipe</a>
                  <button>Save it</button>
                </li>
              )
            })}

          </ul>
  
        </header>
        <footer>
          <p>Copyright Jane Yuan 2020</p>
        </footer>
  
      </div>
    );
  }
}

export default App;
