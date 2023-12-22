// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXs0E6a0mOobQykELv8oipG6wa5mjv55o",
    authDomain: "task-management-94ca8.firebaseapp.com",
    projectId: "task-management-94ca8",
    storageBucket: "task-management-94ca8.appspot.com",
    messagingSenderId: "605946949749",
    appId: "1:605946949749:web:c62219725128c32f9e483c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }