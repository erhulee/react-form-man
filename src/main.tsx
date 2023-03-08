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
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

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
  <DndProvider backend={HTML5Backend} >
    <RouterProvider router={router} />
  </DndProvider>
  // <React.StrictMode>
  // </React.StrictMode>
);
