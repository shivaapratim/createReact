 import React from "react";
 import ReactDOM from "react-dom/client";

 const App=()=>{
    return(
        <div>{"This is a simple web page"}</div>
    )
 }

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<App/>);