import { Link, useLoaderData } from "react-router";

function BlogPages() {
  const postExternal = useLoaderData()

  return (
    <>
      <h1 className="text-3xl pb-3 font-bold">Blog Page</h1>
      {postExternal.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>
            - {item.title}
          </Link>
        </div>
      ))}
    </>
  );
}

export default BlogPages;
