import React from "react";
import { useQueryClient } from "react-query";
import OverviewCard from "./OverviewCard";

function SystemCard() {
  let systemData = [];

  const baseboardData = useQueryClient().getQueryData(["baseboard"]);
  const biosData = useQueryClient().getQueryData(["bios"]);

  if (baseboardData) {
    systemData = [
      {
        key: "Model",
        value: baseboardData.model,
      },
      {
        key: "Manufacturer",
        value: baseboardData.manufacturer,
      },
      {
        key: "Serial",
        value: baseboardData.serial,
      },
      {
        key: "BIOS Version",
        value: biosData?.version
      },
    ];
  }
  return (
    <div>
      <OverviewCard title="System" data={systemData} />
    </div>
  );
}

export default SystemCard;
