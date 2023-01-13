import React, { useState ,useContext} from 'react'
import img3 from "../../Images/mainimg1.jpg"
import { Container } from "react-bootstrap";
import noteContext from '../../../context/noteContext';

const AddNote = () => {
const context = useContext(noteContext);
const{addNote}= context;
const [note,setNote] = useState({title:"",description:"",tag:"default"})
const handleClick=(e)=>{
    e.preventDefault();
addNote(note.title,note.description,note.tag);
setNote({title:"",description:"",tag:""})
}
const change=(e)=>{
setNote({...note,[e.target.name]: e.target.value})
}
  return (
    <div >
      <Container className='my-3'>
    <section className=" container mt-5 ">
    <div className="mainscreen pr-5">
      <div className="row content  no-gutters" >
        
        <div className="col-md-5 x-5 pt-5 pl-5">
        <img src={img3} className="img-fluid"
        />
        <button className="btn"></button>
          
        </div>
        <div className="col-lg-7 px-5 pt-5">
          <h1 className="font-weight-bolder py-3">Add Notes</h1>
          
          <form  >
            <div className="form-row">
              <div className="col-lg-7">
                <h5>Title</h5>
                    <input type="text"  className="form-control my-2 p-3" id='title' name='title' value={note.title} onChange={change}  minLength={3} required />
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7 ">
                <h5>Description</h5>
                    <textarea type="text" className="form-control my-2 p-3 row-3 " id='description' name='description' value={note.description} onChange={change}  minLength={5} required/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7 p-2  ">
                    <button disabled={note.title.length<3||note.description.length<5} type="submit" className="btn1 " onClick={handleClick}>Create notes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  
  </section>
  </Container>
    </div>
  )
}

export default AddNote
