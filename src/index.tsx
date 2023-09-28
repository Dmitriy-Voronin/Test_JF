import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/store";


const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <Provider store={store}>
        <App />
    </Provider>,

  );
};


