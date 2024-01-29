const SideModal = ({index, children, data, setDataAndSwitch}) => {
  return (
    <button
      key={index}
      className="text-white text-lg w-48 py-4 hover:bg-gray-400 rounded-md transition ease-linear font-semibold"
      onClick={() => setDataAndSwitch(data)}
    >
      {children}
    </button>
  );
};
export default SideModal;
