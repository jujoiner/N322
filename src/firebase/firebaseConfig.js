import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQq_pE_oUdV1svZwFjJqUEzucbe6bMMus",
    authDomain: "n322-d81ca.firebaseapp.com",
    projectId: "n322-d81ca",
    storageBucket: "n322-d81ca.firebasestorage.app",
    messagingSenderId: "1009303243871",
    appId: "1:1009303243871:web:5a1c41364c8495d0f45fea",
    measurementId: "G-CRY3053E33"
    
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);