import { RouterProvider } from "react-router";
import { globalContext } from "./context";
import { RouteUtama } from "./routers";

function App() {
  const user = {
    username: "Yoapipp",
  };

  return (
    <div className="App h-screen w-full py-5 px-5">
      <globalContext.Provider value={user}>
        <RouterProvider router={RouteUtama}/>
      </globalContext.Provider>
    </div>
  );
}

export default App;
