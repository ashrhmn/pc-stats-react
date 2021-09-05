import React from 'react'
import { useQueryClient } from 'react-query';
import OverviewCard from './OverviewCard';

function CpuCard() {
    const cpu = useQueryClient().getQueryData(["cpu"]);

    // if (cpuData) {
    //   systemData = [
    //     {
    //       key: "Model",
    //       value: baseboardData.model,
    //     },
    //     {
    //       key: "Manufacturer",
    //       value: baseboardData.manufacturer,
    //     },
    //     {
    //       key: "Serial",
    //       value: baseboardData.serial,
    //     },
    //     {
    //       key: "BIOS Version",
    //       value: biosData?.version
    //     },
    //   ];
    // }
    const cpuData = [
        {
          key: "Model",
          value: cpu?.brand,
        },
        {
          key: "Manufacturer",
          value: cpu?.manufacturer,
        },
        {
          key: "Physical Core",
          value: cpu?.physicalCores
        },
        {
          key: "Virtualization",
          value: cpu?.virtualization?"Enabled":"Disabled"
        },
      ];
    return (
      <div>
        <OverviewCard title="CPU" data={cpuData} />
      </div>
    );
}

export default CpuCard
