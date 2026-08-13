/* ===================== FIREBASE CONFIG ===================== */

const firebaseConfig = {
  apiKey: "AIzaSyDO2or6mbwfE_YW-V-u4JAEuHIOLgDzaNw",
  authDomain: "app-sheet-18928.firebaseapp.com",
  projectId: "app-sheet-18928",
  storageBucket: "app-sheet-18928.firebasestorage.app",
  messagingSenderId: "1024207589778",
  appId: "1:1024207589778:web:f41fa9fb58dfe135ddf14b",

  // ضع رابط Realtime Database الحقيقي هنا
  databaseURL: "https://app-sheet-18928-default-rtdb.firebaseio.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const auth = firebase.auth();

console.log("Firebase initialized successfully");
