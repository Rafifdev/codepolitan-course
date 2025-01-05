import { useLoaderData} from "react-router";

function DetailPost() {
  const post = useLoaderData()
  return (
    <>
      <h1 className="text-3xl pb-3 font-bold">{post.title}</h1>
      <div>{post?.body}</div>
    </>
  );
}

export default DetailPost;
