import { initializeApp} from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIiozGagCrF9qK9MOm0y32tVLDzMPQ4BM",
    authDomain: "tidy-strand-253712.firebaseapp.com",
    projectId: "tidy-strand-253712",
    databaseURL: "https://tidy-strand-253712-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "tidy-strand-253712.appspot.com",
    messagingSenderId: "8330a36582167",
    appId: "1:833036582167:web:6a9fec3f1917f906f18b52",
    measurementId: "G-D32JZ5E3KL"
  };
const app = initializeApp(firebaseConfig);
export default app;
