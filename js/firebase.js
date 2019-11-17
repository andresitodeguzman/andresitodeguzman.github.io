var config = {
    apiKey: "AIzaSyAYroruKZVazhbGP5_uENqqQ2tdPWFyRWs",
    authDomain: "andre-is-great.firebaseapp.com",
    databaseURL: "https://andre-is-great.firebaseio.com",
    projectId: "andre-is-great",
    storageBucket: "andre-is-great.appspot.com",
    messagingSenderId: "811070702795"
};
firebase.initializeApp(config);

window.db = firebase.firestore();