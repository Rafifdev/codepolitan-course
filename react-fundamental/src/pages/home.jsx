import Datas from "../datas.json";
import Article from "../components/Articles";
import Search from "../components/Search";
import { useState } from "react";

function HomePage() {
  const [post, setPost] = useState(Datas);
  const [total, setTotal] = useState(0);


  const onSearch = (item) => {
    const filterDatas = Datas.filter((data) => data.title.includes(item));
    setPost(filterDatas);
    setTotal(filterDatas.length);
  };

  return (
    <div>
      <h1 className="text-3xl pb-3 font-bold">Home Page</h1>
      <Search hasilPencarian={onSearch} totalData={total} />
      <div>
        {post.map(({ title, tag, date, isNew }, index) => (
          <Article {...{ title, tag, date, isNew }} title={title} key={index} />
        ))}
      </div>
    </div>
  );
}
export default HomePage;
