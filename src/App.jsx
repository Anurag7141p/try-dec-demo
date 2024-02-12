import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import UserRoute from "./route/route";
const App= () =>{
  const router = createBrowserRouter([UserRoute]);
  return (
    <Provider store={store}>
    <PersistGate loading={"loading..."} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
  )
}

export default App
