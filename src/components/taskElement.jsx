const TaskElement = ({ title, data, setProjects, getProjectIndex}) => {
    const deleteElement = () => {
        const index = getProjectIndex(data);
        setProjects((prevProjects) => {
            const newProjects = [...prevProjects];
            newProjects[index].tasks = newProjects[index].tasks.filter((task) => task !== title);
            return newProjects;
        });
    }

  return (
    <span className="h-10 w-auto flex justify-between  items-center px-3 py-10 mt-8 bg-slate-100 hover:bg-slate-300 transition ease-linear">
      <h4 className="text-md text-black">{title}</h4>
      <button onClick={deleteElement} className="text-md text-blac">Cancel</button>
    </span>
  );
};
export default TaskElement;