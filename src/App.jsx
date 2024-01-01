import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserRoute from "./route/route";

const App= () =>{
  const router = createBrowserRouter([UserRoute]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
