// firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_tD1f1FOn6K8zDwhtG9sOvpYLM088LEo",
    authDomain: "cnpmnc-thuc-hanh.firebaseapp.com",
    databaseURL: "https://cnpmnc-thuc-hanh-default-rtdb.firebaseio.com",
    projectId: "cnpmnc-thuc-hanh",
    storageBucket: "cnpmnc-thuc-hanh.appspot.com",
    messagingSenderId: "403151784959",
    appId: "1:403151784959:web:54976b8d4a4f287b03f5ca",
    measurementId: "G-62SFN9GD07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);