import { Link, Outlet } from "react-router";
function RootLayout(){
  return (
    <>
    <Link to="/"> Home </Link>
    <Link to="/blog">| Blog |</Link>
    <Link to="/about"> About </Link>
    <Outlet/>
    </>
  )
}

export default RootLayout