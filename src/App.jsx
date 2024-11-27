import { RouterProvider } from "react-router-dom";
import {AppRoutes} from "./routes/routes";
const App = () => {
  return (
    <div>
      <RouterProvider router={AppRoutes} />
    </div>
  );
};

export default App;
