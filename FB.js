const firebaseConfig = {
    apiKey: "AIzaSyAd599ZB1TxH2vJgWaLJCrEv7jBcmRKNI4",
    authDomain: "fireb-bf0fe.firebaseapp.com",
    projectId: "fireb-bf0fe",
    storageBucket: "fireb-bf0fe.appspot.com",
    messagingSenderId: "490331405926",
    appId: "1:490331405926:web:c101e24903857e078a37a7"
  };
  // Initialize Firebase
  const firebaseDB = firebase.initializeApp(firebaseConfig);
  
  export { firebaseDB };