import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import noteContext from "../context/noteContext";   



const Notesitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note ,updateNote } = props;
  return (
    <div className="col-md-3 ">
      <Container>
        <div className="card my-3" style={{ borderRadius: "1rem" }}>
          <div className="card-body">
            <h3 className="card-title">{note.title}</h3>
            <p className="card-text">
              {note.description}
            </p>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-solid fa-file-pen mx-2" onClick={()=>{updateNote(note)}}></i>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Notesitem;
