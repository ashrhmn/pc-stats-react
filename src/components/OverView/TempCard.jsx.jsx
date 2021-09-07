import React from "react";
import { useQueryClient } from "react-query";
import OverviewCard from "./OverviewCard";

function TempCard() {
  const temp = useQueryClient().getQueryData(["temp"]);
  let tempData = [
    {
      key: "Main",
      value: Math.round(parseFloat(temp?.main)).toString()+' °C',
    },
  ];
  temp?.cores.map((core, index) =>
    tempData.push({
      key: "Core " + index,
      value: Math.round(parseFloat(core)).toString()+' °C',
    })
  );
  return (
    <div>
      <OverviewCard title="Temperature" data={tempData} />
    </div>
  );
}

export default TempCard;
