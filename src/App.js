
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from "./Router.js"


function App() {
  return (
    // <div className="App min-h-screen">
    //    <Home/>
    // </div>
    <RouterProvider router={router}/>
  );
}

export default App;
