import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import {
  getAllNotes,
  CreateNote,
  FetchNext,
  FetchPrev,
} from "../Firebase/FirbaseConnector";
import NoteModel from "../NoteModel/NoteModel";
import "./Home.scss";

const Home = () => {
  const [Note, setNotes] = useState([]);
  const [shortBy, setShortBy] = useState("createdAt");
  const [model, setModel]= useState(false)

  useEffect(() => {
    getAllNotes(setNotes,shortBy);
  }, [shortBy]);

const onSelectHandler = (e)=>{
  const sh = e.target.value;
  console.log(sh)
  setShortBy(sh);
}
  return (
    <div className="home">
      {model && <NoteModel setMode={setModel}/>}
      <div className="home-head">
      <h1>MyNotes</h1>
      <div className="home-head-search">
          <input type="text" placeholder="Search"/>
      </div>
      <div className="home-head-option">
       <span>Sort:</span> <select onChange={onSelectHandler}>
          <option value="createdAt">Created At</option>
          <option value="editedAt">Last Editted</option>
        </select>
      </div>
      </div>
      <div className="home-notes">
        {Note.map((e, el) => {
          return <Card data={e}/>;
        })}
      </div>
      <div className="home-btn">
      <span onClick={()=> FetchPrev(Note,setNotes,shortBy)}>Prev</span>
      <span onClick={()=> FetchNext(Note,setNotes,shortBy)}>Next</span>
      </div>
      <div className="home-addNote" onClick={()=>setModel(true)}>
        <span>+</span>New Note
      </div>
    </div>
  );
};

export default Home;
