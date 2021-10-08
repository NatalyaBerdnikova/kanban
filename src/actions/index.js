import { initializeApp } from "firebase/app";

export const initApp = () => {
  initializeApp({
    apiKey: "AIzaSyCtJNWYtVSAIV_nRfo21XVYEjf-_b4K1vY",
    authDomain: "kanban-6d763.firebaseapp.com",
    projectId: "kanban-6d763",
    storageBucket: "kanban-6d763.appspot.com",
    messagingSenderId: "1029567405707",
    appId: "1:1029567405707:web:a9f9c22f87a548e4407e8e",
    measurementId: "G-Q6T078HS0Z",
  });
};

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const createDesk = async (name) => {
  const db = getFirestore();
  try {
    const doc = {
      name,
    };
    const docRef = await addDoc(collection(db, "desks"), doc);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};

export const getDesks = async () => {
  const db = getFirestore();
  const desks = [];
  const querySnapshot = await getDocs(collection(db, "desks"));
  querySnapshot.forEach((doc) => {
    desks.push({ id: doc.id, name: doc.data().name });
  });
  return desks;
};

export const deleteDesk = async (id) => {
  const db = getFirestore();
  return await deleteDoc(doc(db, "desks", id));
};

export const getColumns = async (desk) => {
  const db = getFirestore();
  const columns = [];
  const q = query(collection(db, "columns"), where("deskId", "==", desk.id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const { deskId, name } = doc.data();
    columns.push({ id: doc.id, deskId, name });
  });
  return columns;
};

export const deleteColumn = async (id) => {
  const db = getFirestore();
  return await deleteDoc(doc(db, "columns", id));
};

export const getCards = async (columnId) => {
  const db = getFirestore();
  const cards = [];
  const q = query(collection(db, "cards"), where("columnId", "==", columnId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const { columnId, name } = doc.data();
    cards.push({ id: doc.id, columnId, name });
  });
  return cards;
};

export const deleteCard = async (id) => {
  const db = getFirestore();
  return await deleteDoc(doc(db, "cards", id));
};

export const createCard = async (name, columnId) => {
  const db = getFirestore();
  const doc = {
    name,
    columnId,
  };
  const docRef = await addDoc(collection(db, "cards"), doc);
  doc.id = docRef.id;
  return doc;
};

export const createColumn = async (name, deskId) => {
  const db = getFirestore();
  const doc = {
    name,
    deskId,
  };
  const docRef = await addDoc(collection(db, "columns"), doc);
  doc.id = docRef.id;
  return docRef;
};