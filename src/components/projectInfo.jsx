import React, { useRef } from "react";
import TaskElement from "./taskElement";

const ProjectInfo = ({ data, setProjects, projects, setCurrentPage }) => {
  const taskRef = useRef();

  const descriptionWithBreaks = data.description
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  const deleteElement = () => {
    setProjects(
      projects.filter(
        (project) => JSON.stringify(project) !== JSON.stringify(data)
      )
    );
    setCurrentPage("home");
  };

  const addnewTask = () => {
    if (taskRef.current.value === "") return;
    const index = getProjectIndex(data);
    setProjects((prevProjects) => {
      const newProjects = [...prevProjects];
      newProjects[index].tasks.push(taskRef.current.value);
      newProjects[index].tasks = [...new Set(newProjects[index].tasks)];
      return newProjects;
    });
  }

  const getProjectIndex = (targetProject) => {
    return projects.findIndex(
      (project) => JSON.stringify(project) === JSON.stringify(targetProject)
    );
  };

  return (
    <div className="flex flex-row justify-start gap-3 pl-20 w-48">
      <div className="flex flex-col gap-5">
        <span className="flex gap-96">
          <h1 className="text-3xl text-slate-700 font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
            {data.title}
          </h1>
          <button
            onClick={deleteElement}
            className="text-md text-gray-500 font-medium border-2 border-slate-300 hover:border-slate-600 px-4 py-1 h-10 rounded-md transition ease-in"
          >
            Delete
          </button>
        </span>
        <h3 className="text-md text-gray-400 font-thin">
          {data.date.toLocaleDateString()}
        </h3>
        <p className="text-md text-black">{descriptionWithBreaks}</p>
        <hr className="h-1 bg-slate-300 rounded-md" />
        <h1 className="text-3xl text-slate-700 font-bold">Tasks</h1>
        <span className="flex justify-between">
          <input
            ref={taskRef}
            className="bg-slate-200 rounded-md border-2 border-transparent hover:border-slate-600 transition ease-linear w-3/4 pl-1"
          />
          <button onClick={addnewTask} className="text-md text-gray-500 font-medium border-2 border-slate-300 hover:border-slate-600 px-4 py-1 h-10 rounded-md transition ease-in">
            Add Task
          </button>
        </span>
        {data.tasks.map((task, index) => {
            return (
                <TaskElement
                key={index}
                title={task}
                data={data}
                setProjects={setProjects}
                getProjectIndex={getProjectIndex}
                />
            );
        })}
      </div>
    </div>
  );
};
export default ProjectInfo;
