import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/navbar'
import Notes from '../components/Notes';
import NoteModal from '../components/NoteModal';
import {get,post} from '../../services/ApiEndPoint'


export default function Home() {
  const [notes, setNotes] = React.useState([])
  const [title,setTitle]=React.useState('')
  if(notes){
    console.log('res',notes)
  }

  useEffect(()=>{
    const getnotes=async()=>{
      try{
        const request = await get('/notes/GetNotes')
        const response=request.data
        setNotes(response.Notes)
      
      } catch(error){
        console.log(error)

      }
    }

    getnotes()
  },[])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleCreateNote=async()=>{
      try {
        const request = await post('/notes/create', {title});
        const response = request.data;
        console.log('createnoteresponse',response);
      } catch (error) {
        console.log(error);
      }
    };


  return (
    <>
    <NoteModal title={'Create Note'} value={title} handleTitleChange={(e)=>setTitle(e.target.value)} handleCreateNote={handleCreateNote}/>
    <div className='containers-fluid'>
      <div className='row'>
        <div className='col-lg-2 col-md-2 min-vh-100 shadow'>
          <Sidebar></Sidebar>
        </div>

        <div className='col-lg-10 col-md-10'>
          <Navbar/>
          <div className='mt-3 mx-5'>
            <h1 className='fs-2 fw-bold'>NOTES</h1>
          </div>

          <div className='row mt-4 mx-5'>
           {notes && notes.map((elem)=>{
            return(
              <div className='col-md-4 mb-5 clo-lg-4'>
              <Notes date={elem.date} title={elem.title}></Notes>
              </div>
            )
           
          })}
            

          </div>
        </div>

      </div>   
    </div>b

    </>
  )
}