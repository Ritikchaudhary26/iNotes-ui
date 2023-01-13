import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/noteContext";
import AddNote from "./Main/Main components/AddNote";
import Notesitem from "./Notesitem";
import Modal from "react-bootstrap/Modal";
import { Button, Container } from "react-bootstrap";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes,editNote} = context;
  const [note, setNote] = useState({
    id:"",
    etitle: "",
    edescription: "",
    etag: "default",
  });
  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id, etitle:currentNote.title,edescription: currentNote.description,etag:currentNote.tag})
  };
  const ref = useRef(null);
  const refClose = useRef(null);
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    console.log("Update note.....",note)
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
  };
  const change = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <AddNote />
        <Button variant="primary" onClick={handleShow} ref={ref} className="d-none">
          Launch static backdrop modal
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Note</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <h5>Title</h5>
                  <input
                    type="text"
                    className="form-control my-2 p-3"
                    id="etitle"
                    name="etitle"
                    onChange={change}
                    value={note.etitle}
                    minLength={3} required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7 ">
                  <h5>Description</h5>
                  <textarea
                    type="text"
                    className="form-control my-2 p-3 row-3 "
                    id="edescription"
                    name="edescription"
                    onChange={change}
                    value={note.edescription}
                    minLength={5} required
                  />
                </div>
              </div>
            </form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} ref={refClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClick}>Update Note</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <h1 className="font-weight-bolder py-3 mx-4 text-white">Your Notes</h1>
      <div className=" row  m-3 ">
        <div className="text-black font-weight-bolder">
        {notes.length===0 && 'No Notes to display'}
        </div>
        {notes.map((note) => {
          return (
            <Notesitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
