import React from "react";

const Home = ({setCurrentPage}) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-black font-bold text-3xl">No project selected...</h1>
      <h2 className="text-gray-500 text-xl">
        Select a project to get started or create a new one! (it's a free
        country after all)
      </h2>
      <button
        className="bg-black px-5 py-2 rounded-md border-2 border-slate-400 hover:bg-slate-400"
        onClick={() => setCurrentPage("new-proj")}
      >
        <h2 className="text-white">Create new project</h2>
      </button>
    </div>
  );
};

export default Home;
