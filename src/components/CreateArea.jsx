import React, { useState } from "react";

function CreateArea(props) {
  var [title, setTitle] = useState("");
  var [content, setContent] = useState("");

  function handleChange(event) {
    var { name, value } = event.target;
    if (name === "title") setTitle(value);
    else if (name === "content") setContent(value);
  }

  return (
    <div>
      <form
        onSubmit={event => {
          props.addNote(title, content);
          setContent("");
          setTitle("");
          event.preventDefault();
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
