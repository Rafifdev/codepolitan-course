import { useContext } from "react";
import { globalContext } from "../../context";
const ArticleStatus = ({isNew}) => isNew && <span> --New!</span>

function Article(props) {
  const { title, tag, date, isNew } = props;
  const user = useContext(globalContext)
  return (
    <div className="py-1">
      <h1 className="text-lg font font-semibold">{title}</h1>
      <small>
        {date} | {tag.join(", ")}
        <ArticleStatus isNew={isNew}/>
      </small>
      <div className="text-sm">Di tulis oleh {user.username}</div>
    </div>
  );
}

export default Article;
