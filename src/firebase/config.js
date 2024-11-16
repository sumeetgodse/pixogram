import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDR1vTGLTB4VDbfVyBRD2AbpXon3KQPC-0",
  authDomain: "pixogram-4186b.firebaseapp.com",
  projectId: "pixogram-4186b",
  storageBucket: "pixogram-4186b.appspot.com",
  messagingSenderId: "166905109330",
  appId: "1:166905109330:web:5ec542a6495dfffecff88b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
