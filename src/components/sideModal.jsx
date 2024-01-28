const SideModal = ({index, children, data, setDataAndSwitch}) => {
  return (
    <button
      key={index}
      className="text-white text-md w-48 py-4 border-2 border-transparent hover:border-gray-400 rounded-md transition duration-75ease-in"
      onClick={() => setDataAndSwitch(data)}
    >
      {children}
    </button>
  );
};
export default SideModal;
