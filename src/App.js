// import logo from './logo.svg';
// import Covid19 from './Covid19';
// import './App.css';
// import Bll from './comp/bll';


// function App() {
//   return (
//     <div className="App">
//   <bll/>
//   <Bll/>
//     </div>
//   );
// }

// export default App;


// App.js
// App.js
import React, { useState, useEffect } from 'react';
//import Note from './Note';
import Note from './Keepcloone/Note';
//import AddNoteForm from './AddNoteForm';
import AddNoteForm from './Keepcloone/AddNoteForm';
import styled from 'styled-components';
import SideDrawer from './Keepcloone/SideDrawer'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title, content, color) => {
    setNotes([
      { id: Date.now(), title, content, color },
      ...notes,
    ]);
  };

  const editNote = (id, title, content, color) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, title, content, color } : note
      )
    );
  };

  const deleteNote = (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }
  };

  return (
    <Container>
      <SideDrawer/>
      <AddNoteForm onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          color={note.color}
          onEdit={editNote}
          onDelete={deleteNote}
        />
      ))}
    </Container>
  );
};

export default App;

