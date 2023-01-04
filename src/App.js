import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import FileSelected from "./components/FileSelected";
import FotoList from "./components/FotoList";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <FileSelected />
        <FotoList />
      </div>
    </Provider>
  );
}

export default App;
