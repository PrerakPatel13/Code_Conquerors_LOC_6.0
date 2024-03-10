import React, { useEffect } from 'react';
import './NotesApp.css';

// ... (your import statements)

const NotesApp = () => {
    useEffect(() => {
      const notesContainer = document.querySelector(".notes-container");
      const createBtn = document.querySelector(".btns1");
      let notes = document.querySelectorAll(".input-box");
  
      function showNotes() {
        notesContainer.innerHTML = localStorage.getItem("notes");
      }
  
      showNotes();
  
      function updateStorage() {
        localStorage.setItem("notes", notesContainer.innerHTML);
      }
  
      createBtn.addEventListener("click", () => {
        let inputBox = document.createElement("div");
        let innerInputBox = document.createElement("p");
        let img = document.createElement("img");
        innerInputBox.className = "input-box";
        innerInputBox.setAttribute("contenteditable", "true");
      
        // Add lines as a placeholder
        for (let i = 0; i < 5; i++) {
          let lineBreak = document.createElement("br");
          innerInputBox.appendChild(lineBreak);
        }
      
        img.src = "https://github.com/Khyes/13_notes_app/blob/main/img/delete.png?raw=true";
        img.className = "delete-icon"; // Added class name to the delete icon
        inputBox.appendChild(innerInputBox);
        inputBox.appendChild(img);
        notesContainer.appendChild(inputBox);
      
      
      });
  
      notesContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
          e.target.parentElement.remove();
          updateStorage();
        } else if (e.target.tagName === "P") {
          notes = document.querySelectorAll(".input-box");
          notes.forEach(nt => {
            nt.onkeyup = function () {
              updateStorage();
            };
          });
        }
      });
  
      document.addEventListener("keydown", event => {
        if (event.key === "Enter") {
          document.execCommand("insertLineBreak");
          event.preventDefault();
        }
      });
    }, []);
  
    return (
      <div className="container1">
        <h1 className='note'>
          <span className='sp'>📝</span> Notes
        </h1>
        <button className="btns1">
          <span className='sp'>➕</span> Create Notes
        </button>
        <div className="notes-container"></div>
      </div>
    );
  };
  
  export default NotesApp;
  
