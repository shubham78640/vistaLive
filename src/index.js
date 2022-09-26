import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import StepContext from "./ContextApi/StepContext";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StepContext>
    <React.StrictMode>
      {/* <Provider store={store}> */}
      
        <App />
     
      {/* </Provider> */}
    </React.StrictMode>
  </StepContext>
);
