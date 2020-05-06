import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNote] = useState([]);

  function addNote(title, content) {
    setNote(prev => {
      return [...prev, { title: title, content: content }];
    });
  }

  function deleteNote(key) {
    setNote(prev => {
      return prev.filter((item, index) => {
        return key !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
