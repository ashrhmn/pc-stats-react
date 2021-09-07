import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
import { useQueryClient } from "react-query";

function TempChart() {
  const queryClient = useQueryClient();

  const [dataset, setdataset] = useState([]);

  useEffect(() => {
    setInterval(() => {
      queryClient.invalidateQueries("temp");
      const temp = dataset;
      if (dataset.length > 10) {
        temp.shift();
        setdataset(temp);
      }

      const date = new Date()

      temp.push({
        temp: queryClient.getQueryData("temp").main,
        time: date.getMinutes()+':'+date.getSeconds()
      });
      setdataset(temp);

      console.log(dataset.map((d) => d.temp));
    }, 3000);
  }, []);

  return (
    <div>
      <Line
        data={{
          labels: dataset.map((d) => d.time),
          datasets: [
            {
              label: "Temperature",
              data: dataset.map((d) => d.temp),
            },
          ],
        }}
        height={300}
        width={300}
        options={{ maintainAspectRatio: false, animation: false }}
      />
    </div>
  );
}

export default TempChart;
