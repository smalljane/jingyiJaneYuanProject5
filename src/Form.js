 import React, { Component } from 'react';

 class Form extends Component{
     constructor(){
         super();
         this.state = {
             userInput: ''
         }
     }
    //  
     getUserInput = (event) => {
         this.setState({
             userInput: event.target.value
         })
     }
     render(){
         return(
             <form action="">
                 <input type="text" value={this.state.userInput} onChange={this.getUserInput} placeholder="enter an ingredient eg.beef" />
                 <button type="submit">Find Yum</button>
             </form>
         )
     }
 }

 export default Form