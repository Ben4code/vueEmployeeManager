/* eslint-disable no-unused-vars */
import firebase from 'firebase/app';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAE9u_iGp30s_-9gZh23vT79SWsZmfck4c",
    authDomain: "vueemployeecrud.firebaseapp.com",
    databaseURL: "https://vueemployeecrud.firebaseio.com",
    projectId: "vueemployeecrud",
    storageBucket: "vueemployeecrud.appspot.com",
    messagingSenderId: "153311638164"
  };
  const firebaseApp = firebase.initializeApp(config);
  
  
  //Exportfirestore db
  export default firebaseApp