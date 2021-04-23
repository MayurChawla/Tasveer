import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCXGQjQASOnoXLKviNScab5-ulx4hrB20o",
    authDomain: "tasveer-ec027.firebaseapp.com",
    projectId: "tasveer-ec027",
    storageBucket: "tasveer-ec027.appspot.com",
    messagingSenderId: "957843283617",
    appId: "1:957843283617:web:fc3cb0c649c62279031ae0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage(); //projectstorage is for uploading images to cloud fb storage
  const projectFirestore = firebase.firestore();//projectstorage is for database to cloud fb
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  //exporting variables to use these in other files.
  export { projectStorage, projectFirestore, timestamp};