import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "./index.css";
import MainPage from "./pages/main";
import NotFound from './pages/notfound';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route path="/" element={<MainPage></MainPage>}>
  //     {/* <Route path="dashboard" element={<Dashboard />} /> */}
  //   </Route>
  // )
  [
    {
      path: '/',
      element: (<MainPage></MainPage>)
    },
    {
      path: '*',
      element: (<NotFound></NotFound>)
    },
  ]
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
