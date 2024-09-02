import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router.js";
import { Provider } from "react-redux";
import liveChatStore from "./redux/liveChatStore.js";
import { SocketProvider, useSocket } from "./contexts/SocketContext.js";
import io from "socket.io-client";

function App() {
  return (
    <Provider store={liveChatStore}>
      <SocketProvider>
      <RouterProvider router={router} />
      </SocketProvider>
    </Provider>
  );
}

export default App;
