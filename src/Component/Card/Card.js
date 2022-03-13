import React, { useState } from "react";
import { DeleteNote } from "../Firebase/FirbaseConnector";
import "./card.scss";
import DeleteIcon from "../../Assets/images/delete.png";
import EditIcon from "../../Assets/images/edit.png";
import NoteModel from "../NoteModel/NoteModel";
const Card = (props) => {
  const [editData,setEditData] = useState(false);
  const { id, note } = props.data;
  return (
    <div className="Note" key={id}>
      {editData && <NoteModel setMode={setEditData} data={editData}/>}
      <div className="Note-title" style={{ backgroundColor: note.color }}>
        <span>{note.title}</span>
      </div>
      <div className="Note-body" style={{ backgroundColor: note.color }}>
        <p>{note.body}</p>
        <div className="Note-body-bottom">
          <span className="Note-body-bottom-date">{note.createdAt.split(" ").splice(0,5).join(" ")}</span>
          <div className="Note-body-bottom-icon">
              <img src={DeleteIcon} onClick={()=>DeleteNote(id)} alt="delete note"/>
              <img src={EditIcon} alt="edit note" onClick={()=>setEditData({note,id})}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
