
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from "./Router.js"
import { Provider } from 'react-redux';
import liveChatStore from './redux/liveChatStore.js';


function App() {
  return (
    // <div className="App min-h-screen">
    //    <Home/>
    // </div>
     <Provider store={liveChatStore}>
    <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;
