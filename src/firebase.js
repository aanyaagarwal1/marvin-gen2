import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAOzao-DNV82JcF0aFHed17VBYhwqsAbZ8",
    authDomain: "marvin-41a93.firebaseapp.com",
    databaseURL: "https://marvin-41a93-default-rtdb.firebaseio.com/",
    projectId: "marvin-41a93",
    storageBucket: "marvin-41a93.appspot.com",
    messagingSenderId: "164997235406",
    appId: "1:164997235406:web:d5d3152bd84b0df33e069f",
    measurementId: "G-GT4J6E14DX"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
