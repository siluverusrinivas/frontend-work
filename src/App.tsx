
import "./App.css";
import { RouterProvider } from "react-router-dom";
import {AppRouter} from "./routes/AppRouter";

function App() {
 

  return (
    <main className="auth-page">
    <RouterProvider router={AppRouter} />
    </main>
  );
}

export default App;
