import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1aem_WHEcLyTVnL0PkkFKCeCd5jE09EE",
  authDomain: "otonom-aaa59.firebaseapp.com",
  databaseURL: "https://otonom-aaa59-default-rtdb.firebaseio.com",
  projectId: "otonom-aaa59",
  storageBucket: "otonom-aaa59.appspot.com",
  messagingSenderId: "962458632344",
  appId: "1:962458632344:web:5fdbd3f8b3e7520b8850ed",
  measurementId: "G-1EQ9ELM7HL"
};


  const firebase=firebase.initializeApp(firebaseConfig);
  
  export default firebase;
  