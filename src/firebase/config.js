import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR1vTGLTB4VDbfVyBRD2AbpXon3KQPC-0",
  authDomain: "pixogram-4186b.firebaseapp.com",
  projectId: "pixogram-4186b",
  storageBucket: "pixogram-4186b.appspot.com",
  messagingSenderId: "166905109330",
  appId: "1:166905109330:web:5ec542a6495dfffecff88b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
