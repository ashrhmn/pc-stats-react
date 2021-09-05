import React from "react";

import service from "./service";
import OverView from "./components/OverView/";
import { useQuery } from "react-query";

function App() {

  useQuery("baseboard", () => service.get("baseboard").then((res) => res.data));
  useQuery("bios", () => service.get("bios").then((res) => res.data));
  useQuery("cpu", () => service.get("cpu").then((res) => res.data));
  useQuery("graphics", () => service.get("graphics").then((res) => res.data));


  return (
    <div className="bg-blue-300 mx-auto max-w-5xl">
      <OverView />
    </div>
  );
}

export default App;
