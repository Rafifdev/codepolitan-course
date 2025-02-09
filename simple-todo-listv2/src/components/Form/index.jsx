export default function Form({value, handleInputChange, handleAddList}) {
  return (
    <form className="add-form" onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Add notes here.." value={value} onChange={handleInputChange}/>
      <button onClick={handleAddList}>Add</button>
    </form>
  );
}
