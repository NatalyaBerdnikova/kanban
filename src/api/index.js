import { initializeApp } from "firebase/app";

export const initialize = () => {
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

const createDesk = async (name) => {
  const db = getFirestore();
  try {
    const doc = {
      name,
    };
    const docRef = await addDoc(collection(db, "desks"), doc);
    doc.id = docRef.id;
    return doc;
  } catch (e) {
    console.error("Error adding document: ", e);
    return e;
  }
};

const getDesks = async () => {
  const db = getFirestore();
  const desks = [];
  const querySnapshot = await getDocs(collection(db, "desks"));
  querySnapshot.forEach((doc) => {
    desks.push({ id: doc.id, name: doc.data().name });
  });
  return desks;
};

const deleteDesk = async (id) => {
  const db = getFirestore();
  return await deleteDoc(doc(db, "desks", id));
};

const createColumn = async (name, deskId) => {
  const db = getFirestore();
  const doc = {
    name,
    deskId,
  };
  const docRef = await addDoc(collection(db, "columns"), doc);
  doc.id = docRef.id;
  return doc;
};

const getColumns = async (deskId) => {
  const db = getFirestore();
  const columns = [];
  const q = query(collection(db, "columns"), where("deskId", "==", deskId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const { deskId, name } = doc.data();
    columns.push({ id: doc.id, deskId, name });
  });
  return columns;
};

const deleteColumn = async (id) => {
  const db = getFirestore();
  return await deleteDoc(doc(db, "columns", id));
};

const getCards = async (columnId) => {
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

const deleteCard = async (id) => {
  const db = getFirestore();
  return await deleteDoc(doc(db, "cards", id));
};

const createCard = async (name, columnId) => {
  const db = getFirestore();
  const doc = {
    name,
    columnId,
  };
  const docRef = await addDoc(collection(db, "cards"), doc);
  doc.id = docRef.id;
  return doc;
};

export const api = {
  createDesk,
  getDesks,
  deleteDesk,
  getColumns,
  deleteColumn,
  getCards,
  deleteCard,
  createCard,
  createColumn,
};
