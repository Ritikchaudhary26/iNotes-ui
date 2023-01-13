import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all Note
  const getNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTQ5ZTE4NzMwZjkzYWY1MWNmNDY1In0sImlhdCI6MTY2NzIwOTI2OH0.Ri8zDf47bKpa8Ijn9gpwMO6-fM-o_wwJe475Vf0DKqY",
      },
      
    });
    const json = await response.json()
  console.log(json)
  setNotes(json)
    };

  //Add a Note
  const addNote = async(title, description, tag) => {
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTQ5ZTE4NzMwZjkzYWY1MWNmNDY1In0sImlhdCI6MTY2NzIwOTI2OH0.Ri8zDf47bKpa8Ijn9gpwMO6-fM-o_wwJe475Vf0DKqY",
    },
    body: JSON.stringify({title, description, tag}),
  });
  const json = await response.json();
  console.log(json,"dummy data")

    //TODO: API call
    console.log("add a new note");
    setNotes(notes.concat(json));
  };
  //Delete a Note
  const deleteNote = async(id) => {
    //Api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTQ5ZTE4NzMwZjkzYWY1MWNmNDY1In0sImlhdCI6MTY2NzIwOTI2OH0.Ri8zDf47bKpa8Ijn9gpwMO6-fM-o_wwJe475Vf0DKqY",
      },
    });
    const json =  await response.json();
    console.log(json)
    
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //Api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM1ZTQ5ZTE4NzMwZjkzYWY1MWNmNDY1In0sImlhdCI6MTY2NzIwOTI2OH0.Ri8zDf47bKpa8Ijn9gpwMO6-fM-o_wwJe475Vf0DKqY",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(notes)
    setNotes(newNotes)
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
