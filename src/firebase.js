// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKzDz1JJjBjYPZzvZYI2AHGPlBybNsH_4",
  authDomain: "react-firebase-8da5f.firebaseapp.com",
  projectId: "react-firebase-8da5f",
  storageBucket: "react-firebase-8da5f.appspot.com",
  messagingSenderId: "833364198908",
  appId: "1:833364198908:web:7d292ad3bedc0830c8de79"
};

// Initialize Firebase
// Initialiser firebase
export const app = initializeApp(firebaseConfig);

//initialiser le cloud firestore et obtenir une référence au service
export const database = getFirestore(app);
//exportons les fonctions pour notre crud

// //fonction pour ajouter des données dans la database
// export const addTask = (title,  body) =>
//   addDoc(collection(database, "todolist"), {title,  body});

// //fonction pour lister tous les documents
// export const onGetTasks = (callback) =>
//   onSnapshot(collection(database, "todolist"), callback);

// //fonction pour supprimer des documents
// export const deleteTask = (id) => deleteDoc(doc(database, "todolist", id));

// //fonction pour lister un document
// export const getTask = (id) => getDoc(doc(database, "todolist", id));

// //fonction pour mettre à jour les documents
// export const updateTask = (id, newFields) =>
//   updateDoc(doc(database, "todolist", id), newFields);

// export const crud ={
//   addTask:(title,  body) =>
//   addDoc(collection(database, "todolist"), { title,  body }),
//   onGetTasks : (callback) =>
//   onSnapshot(collection(database, "todolist"), callback),
//   updateTask:(id,newFields)=>updateDoc(doc(database, "todolist", id), newFields),
//   deleteTask : (id) => deleteDoc(doc(database, "todolist", id))
// }