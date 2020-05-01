import firebase from '../node_modules/firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBIf2eG6SDazTyEL-tXh9Hh4NJ89-XddIA",
    authDomain: "project5-recipe.firebaseapp.com",
    databaseURL: "https://project5-recipe.firebaseio.com",
    projectId: "project5-recipe",
    storageBucket: "project5-recipe.appspot.com",
    messagingSenderId: "1089325539922",
    appId: "1:1089325539922:web:ebf3e1df02bfd85fc3f58b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase