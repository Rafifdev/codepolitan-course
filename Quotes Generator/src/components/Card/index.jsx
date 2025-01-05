function Card(props) {
  const { text, borderTopColor, children, size="w-52" } = props
  return (
    <div
      className={`flex justify-center items-center font-semibold flex-col bg-white gap-3 px-5 pb-5 py-8  ${size} rounded-md shadow-md ${borderTopColor} border-t-4`}
    >
      <p className="font-semibold">{text}</p>
      {children}
    </div>
  );
}

export default Card;
