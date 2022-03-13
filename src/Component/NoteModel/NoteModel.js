import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CreateNote, UpdateNote } from "../Firebase/FirbaseConnector";
import toast,{Toaster} from "react-hot-toast";
import "./noteMode.scss";
const red = Math.floor(((1 + Math.random()) * 256) / 2);
const green = Math.floor(((1 + Math.random()) * 256) / 2);
const blue = Math.floor(((1 + Math.random()) * 256) / 2);
const color = "rgb(" + red + ", " + green + ", " + blue + ")";
const NoteModel = (props) => {
  const { data } = props;
  console.log(props)
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
 

  useEffect(() => {
    if (data) {
      setTitle(data.note.title)
      setbody(data.note.body)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title.trim() || !body.trim()){
      toast.error("Please Add Your Text In Title and in Body")
      return 
    }
    if (data) {

      e.preventDefault();
      const note = {
        title,
        body,
        isEdited: true,
      };

      UpdateNote(note, data.id)
      props.setMode(false)
    } else {
      const note = {
        title,
        body,
        isEdited: false,
        color,
      };
      CreateNote(note);
      props.setMode(false)
    }
  };

  return ReactDOM.createPortal(
    <div className="model">
      <div className="model-note">
        <form onSubmit={handleSubmit} style={{ backgroundColor: data ? data.note.color :color }}>
          <span
            className="model-note-close"
            onClick={() => props.setMode(false)}
          >
            +
          </span>
          <div className="model-note-title">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="model-note-body">
            <textarea
              id="body"
              value={body}
              onChange={(e) => setbody(e.target.value)}
              placeholder="Your Text"
              rows="10"
              cols="60"
              required
            />
          </div>

          <button>{data ? 'Update Note' :'Create Note'}</button>
        </form>
      </div>
      <Toaster/>
    </div>,
    document.getElementById("model")
  );
};

export default NoteModel;
