import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBavWlQEQ-tBLRxvT1mvvZKvbEmgFMRSDg",
    authDomain: "nebea-store.firebaseapp.com",
    projectId: "nebea-store",
    storageBucket: "nebea-store.appspot.com",
    messagingSenderId: "765877869950",
    appId: "1:765877869950:web:177cee5047078d979fe72f"
};

export const getFirebase = () => {
    return firebaseConfig;
};

export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
};