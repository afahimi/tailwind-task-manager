import React, { useState } from "react";
import Home from "./components/home";
import CreateProject from "./components/createProject";
import SideModal from "./components/sideModal";
import ProjectInfo from "./components/projectInfo";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [projects, setProjects] = useState([]);
  const [data, setCurrentData] = useState({});

  const addProject = (title, description, date) => {
    const project = {
      title: title,
      description: description,
      date: new Date(date),
      tasks: [],
    };

    setProjects([...projects, project]);
  };

  const setDataAndSwitch = (data) => {
    setCurrentData(data);
    setCurrentPage("project");
  };

  const currPageSwitch = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "new-proj":
        return (
          <CreateProject
            setCurrentPage={setCurrentPage}
            addProject={addProject}
          />
        );
      case "project":
        return (
          <ProjectInfo
            data={data}
            projects={projects}
            setProjects={setProjects}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return <h1>404</h1>;
    }
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="w-3/12 h-screen bg-slate-700 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-4 py-24 items-center">
          <div className="flex flex-col gap-6 items-start w-fit pr-12">
            <h1 className="text-4xl text-white font-bold flex items-start">
              Your Projects
            </h1>
            <button className="bg-gray-500 px-5 py-2 rounded-md hover:bg-slate-400 transition ease-in">
              <h2
                className="text-white"
                onClick={() => setCurrentPage("new-proj")}
              >
                + Add Project
              </h2>
            </button>
          </div>
          <div className="py-4 flex flex-col gap-1">
            {projects.map((project, index) => {
              return (
                <SideModal
                  index={index}
                  data={project}
                  setDataAndSwitch={setDataAndSwitch}
                >
                  {project.title}
                </SideModal>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-screen w-screen py-40">{currPageSwitch()}</div>
    </div>
  );
}

export default App;
