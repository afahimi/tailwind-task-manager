import React, { useRef } from "react";
import "./createProject.css";

const CreateProject = ({ setCurrentPage, addProject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const handleSubmit = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    console.log("field values: ", title, description, date)

    if (!title || !description || !date) {
      alert("Please fill out all fields!");
      return;
    }

    addProject(title, description, date);
    setCurrentPage("home");
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <span className="flex gap-4 w-96 justify-end">
        <button
          onClick={() => setCurrentPage("home")}
          className="text-black font-bold hover:border-stone-950 border-2 border-transparent px-4 py-2 rounded-md transition duration-200 ease-linear border-slate-300"
        >
          Cancel
        </button>
        <button 
        onClick={handleSubmit}
        className="text-white font-bold hover:border-stone-950 border-2 border-transparent px-4 py-2 rounded-md transition duration-200 ease-linear bg-slate-400">
          Create
        </button>
      </span>
      <form className="flex flex-col gap-8 h-screen">
        <div className="formWidth">
          <label className="formText">
            Title
          </label>
          <input ref={titleRef} className="formElement"></input>
        </div>
        <div className="formWidth">
          <label className="formText">Description</label>
          <textarea ref={descriptionRef} className="formElement"></textarea>
        </div>
        <div className="formWidth">
          <label className="formText">Date</label>
          <input ref={dateRef} className="formElement" type="date"></input>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
