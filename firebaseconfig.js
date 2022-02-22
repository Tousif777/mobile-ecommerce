import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxkR-bNT4sBrc6_hf5l8pBztH9vcNAMGE",
  authDomain: "todo-2dce4.firebaseapp.com",
  projectId: "todo-2dce4",
  storageBucket: "todo-2dce4.appspot.com",
  messagingSenderId: "364172153729",
  appId: "1:364172153729:web:9edcf6ced3afc5c6388e80",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
