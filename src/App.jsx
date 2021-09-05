import React, { useEffect } from "react";

import service from "./service";
import OverView from "./components/OverView/";
import { useQuery, useQueryClient } from "react-query";

function App() {

  const queryClient = useQueryClient()

  useQuery("baseboard", () => service.get("baseboard").then((res) => res.data));
  useQuery("bios", () => service.get("bios").then((res) => res.data));
  useQuery("cpu", () => service.get("cpu").then((res) => res.data));
  useQuery("graphics", () => service.get("graphics").then((res) => res.data));
  useQuery("mem", () => service.get("mem").then((res) => res.data));
  useQuery("temp", () => service.get("cpuTemperature").then((res) => res.data));

  const frequentUpdate = ()=>{
    queryClient.invalidateQueries('temp')
    queryClient.invalidateQueries('mem')
  }

  useEffect(()=>{
    setInterval(frequentUpdate,2000)
  },[])

  return (
    <div className="bg-blue-300 mx-auto max-w-5xl">
      <OverView />
    </div>
  );
}

export default App;
