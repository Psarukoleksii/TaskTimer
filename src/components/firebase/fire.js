import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDl4q1Z26jnxfdJKhSb5uHznp6tvJ7zuDo",
    authDomain: "taskjs-4884c.firebaseapp.com",
    projectId: "taskjs-4884c",
    storageBucket: "taskjs-4884c.appspot.com",
    messagingSenderId: "139437109620",
    appId: "1:139437109620:web:1a4303dd7572837a04fc21"
};
export const fire = firebase.initializeApp(firebaseConfig);
