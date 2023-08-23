// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage' //NEW 1 I wrote
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRe0moMygi1AeC4LbT_qTD8FwXmIK2bek",
    authDomain: "awaas-vishwa-35e28.firebaseapp.com",
    projectId: "awaas-vishwa-35e28",
    storageBucket: "awaas-vishwa-35e28.appspot.com",
    messagingSenderId: "165687435721",
    appId: "1:165687435721:web:3049cf67dafe2e3be98818",
    measurementId: "G-7N4XEY299F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app); //NEW 2 I wrote