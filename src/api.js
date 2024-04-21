import { initializeApp } from "firebase/app";
import { query } from "firebase/database";
import { where } from "firebase/firestore/lite";
import { getDoc } from "firebase/firestore/lite";
import { doc } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore/lite";
import { collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAs0Mjf-WJaJk_tAp7WUp0-3JLTlaRtRoY",
  authDomain: "vanlife-86fa7.firebaseapp.com",
  projectId: "vanlife-86fa7",
  storageBucket: "vanlife-86fa7.appspot.com",
  messagingSenderId: "353886909941",
  appId: "1:353886909941:web:e04f8ab96772ffb5945cbc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function getVan(id) {
  const docRef = await doc(db, "vans", id);
  const vanSnapshop = await getDoc(docRef);
  return { ...vanSnapshop.data(), id: vanSnapshop.id };
}

export async function getMyVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));

  const querySnapshot = await getDocs(vansCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

// export async function getVans() {
//   const res = await fetch(
//     "https://pixabay.com/api/?key=40812056-f3b293341e49fa6b97eab62e5&q=van+car&image_type=photo"
//   );
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   const data = await res.json();
//   return data.hits;
// }

// export const getMyVans = async () => {
//   const response = await fetch(
//     "https://pixabay.com/api/?key=40812056-f3b293341e49fa6b97eab62e5&q=tokyo&image_type=photo"
//   );

//   const responseData = await response.json();

//   console.log(responseData);

//   const myVanData = await responseData.hits.filter((item) => item.likes > 200);

//   return myVanData;
// };

export const getTheVan = async (params) => {
  const response = await fetch(
    "https://pixabay.com/api/?key=40812056-f3b293341e49fa6b97eab62e5&q=tokyo&image_type=photo"
  );
  const data = await response.json();

  const targetVan = data.hits.find(
    (item) => parseInt(item.id) === parseInt(params.id)
  );

  return targetVan;
};

const loginData = [
  { email: "pride81@hotmail.com", password: "abcdefg" },
  { email: "pride82@hotmail.com", password: "123456" },
];

let errorMessage;

export const loginUser = async (creds) => {
  try {
    const res = await fetch(loginData, {
      method: "post",
      body: JSON.stringify(creds),
    });
    const data = await res.json();
  } catch (e) {
    errorMessage = e;
    throw Error("Error", e);
  } finally {
    return { loginData: loginData, errorMessage: errorMessage };
  }
};
