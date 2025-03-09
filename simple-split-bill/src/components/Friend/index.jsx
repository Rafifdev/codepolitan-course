export default function Friend({ friends, onSelect, selectedFriend }) {

  const isSelected = selectedFriend?.id === friends.id
  
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friends.image} alt={friends.name}/>
      <h3>{friends.name}</h3>

      {/* Balance red */}
      {friends.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp{Math.abs(friends.balance)} ke {friends.name}
        </p>
      )}

      {/* Balance green */}
      {friends.balance > 0 && (
        <p className="green">
          {friends.name} berhutang Rp{Math.abs(friends.balance)} ke kamu
        </p>
      )}

      {/* Balance */}
      {friends.balance === 0 && (
        <p>kamu dan {friends.name} tidak memiliki hutang</p>
      )}

      <button className="button" onClick={() => onSelect(friends)}>{isSelected ? "Tutup" : "Pilih"}</button>
    </li>
  );
}
