// component stats
export default function Stats({ listItem }) {
  if (listItem.length == 0) {
    return (
      <footer className="stats">
        <span>📝 Yuk mulai bikin catatan 😊</span>
      </footer>
    );
  }

  const totalItems = listItem.length;
  const chechklistItem = listItem.filter((item) => item.chechklist).length;
  const percentage = Math.round((chechklistItem / totalItems) * 100);

  if (percentage == 100) {
    return (
      <footer className="stats">
        <span>😲 Wow kamu menyelesaikan semua nyaaa! 😲</span>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <span>
        📝 Anda memiliki {totalItems} catatan dan baru {chechklistItem} yang di
        chechklist ({percentage + "%"}) ✅
      </span>
    </footer>
  );
}