import { RouterProvider } from "react-router-dom";
import { MainRoutes } from "./Routes/Routes";

const App = () => {
  return (
    <>
      <RouterProvider router={MainRoutes} />
    </>
  );
};

export default App;
