import { initializeApp } from "firebase/app";
import {
    addDoc,
    collection,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBr5Dia_Dwt2nvn4Gz4Pd8iLlduGcPVvuY",
    authDomain: "flipcart-clone-c10.firebaseapp.com",
    projectId: "flipcart-clone-c10",
    storageBucket: "flipcart-clone-c10.appspot.com",
    messagingSenderId: "294301414883",
    appId: "1:294301414883:web:137ea7c5f1883ab49d1cd6",
    measurementId: "G-1BVFEV51TN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getUsers(email, password) {
    const usersCol = collection(db, "users");
    const q = query(
        usersCol,
        where("email", "==", email),
        where("password", "==", password)
    );
    const userSnapshot = await getDocs(q);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    return userList;
}

export async function addUsers(userDetails) {
    const usersCol = collection(db, "users");
    const q = query(usersCol, where("email", "==", userDetails.email.value));
    const userSnapshot = await getDocs(q);
    const userList = userSnapshot.docs.map((doc) => doc.data());
    if (userList.length === 0) {
        const docRef = await addDoc(usersCol, {
            fname: userDetails.fname.value,
            lname: userDetails.lname.value,
            username: userDetails.username.value,
            email: userDetails.email.value,
            password: btoa(userDetails.password.value),
            phone: userDetails.phone.value,
        });
        return true;
    } else {
        return false;
    }
}
