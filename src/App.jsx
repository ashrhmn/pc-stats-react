import React, { useEffect } from "react";

import service from "./service";
import OverView from "./components/OverView/";
import { useQuery, useQueryClient } from "react-query";
import TempChart from "./components/Charts/TempChart";

function App() {
  const queryClient = useQueryClient();

  const tempHistory = [];

  useQuery("baseboard", () => service.get("baseboard").then((res) => res.data));
  useQuery("bios", () => service.get("bios").then((res) => res.data));
  useQuery("cpu", () => service.get("cpu").then((res) => res.data));
  useQuery("graphics", () => service.get("graphics").then((res) => res.data));
  useQuery("mem", () => service.get("mem").then((res) => res.data));
  const { data } = useQuery("temp", () =>
    service.get("cpuTemperature").then((res) => res.data)
  );

  const frequentUpdate = () => {
    queryClient.invalidateQueries("temp");
    queryClient.invalidateQueries("mem");

    // if (tempHistory.length == 10) {
    //   tempHistory.shift();
    // }
    // tempHistory.push({
    //   temp: queryClient.getQueryData("temp"),
    //   time: new Date().getMinutes() + ":" + new Date().getSeconds(),
    // });

    // console.log(tempHistory);
  };

  useEffect(() => {
    setInterval(frequentUpdate, 2000);
  }, []);

  return (
    <div className="bg-blue-300 mx-auto max-w-5xl">
      <OverView />
      <TempChart data={tempHistory} />
    </div>
  );
}

export default App;
