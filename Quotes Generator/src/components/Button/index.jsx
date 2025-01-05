function Button({ children, onClick }) {
  return (
    <>
      <button
        className="bg-blue-500 rounded-lg px-4 py-2 text-white text-sm text-center hover:bg-blue-600 active:bg-blue-800"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
