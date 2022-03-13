import {
  doc,
  collection,
  Timestamp,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  updateDoc,
  limit,
  startAfter,
  endBefore,
  limitToLast,
} from "firebase/firestore";

import { DB } from "../Firebase/firebase";


export const CreateNote = async (note) => {
  note.createdAt = Timestamp.now()
  note.editedAt = null
  await addDoc(collection(DB, "note"), note);
};

export const DeleteNote = async (id) => {
  console.log(id);
  await deleteDoc(doc(DB, "note", id));
};

export const UpdateNote = async (note, id) => {
  note.editedAt= Timestamp.now()
  const OldNote = doc(DB, "note", id);
  await updateDoc(OldNote, note);
};

const snapShot = (quary, setNotes) =>{
    onSnapshot(quary, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          note: {
            ...doc.data(),
            createdAt: doc.data().createdAt.toDate().toString(),
          },
        }));
       
       if(data.length){
        data.lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]
        data.firstDoc = querySnapshot.docs[0]
        console.log(data)
        setNotes(data)
       }
        
      });
}

export const getAllNotes = async (setNotes,shortBy) => {
  let order = "asc"
  if(shortBy === "editedAt"){
    order = "desc"
  }
  
    try {
      const q = query(collection(DB, "note"), orderBy(shortBy, order), limit(6));
      snapShot(q,setNotes)
    } catch (e) {
}
};

export const FetchNext = (notes, setNotes,shortBy)=>{
  let order = "asc"
  if(shortBy === "editedAt"){
    order = "desc"
  }
    try {
        const q = query(collection(DB, "note"), orderBy(shortBy, order),startAfter(notes.lastDoc), limit(6));
        snapShot(q,setNotes)
      } catch (e) {
    }
}

export const FetchPrev = (notes, setNotes,shortBy)=>{
  let order = "asc"
  if(shortBy === "editedAt"){
    order = "desc"
  }
    try {
        const q = query(collection(DB, "note"), orderBy(shortBy, order),endBefore(notes.firstDoc),limitToLast(6));
        snapShot(q,setNotes)
      } catch (e) {
    }
}