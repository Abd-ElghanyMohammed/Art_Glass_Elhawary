
  // Import the functions you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";






const firebaseConfig = {
  apiKey: "AIzaSyCw-HCN2g_RLbx2SRSJ46wj-9Xyzp8whCI",
  authDomain: "elhawary-art-glass.firebaseapp.com",
  projectId: "elhawary-art-glass",
  storageBucket: "elhawary-art-glass.firebasestorage.app",
  messagingSenderId: "182981338111",
  appId: "1:182981338111:web:6fcd60f1d9eb995746fdca",
  measurementId: "G-V9M7VBMRV0"
};

const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export { auth };
