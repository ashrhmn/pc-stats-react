import React from 'react'
import { useQueryClient } from 'react-query';
import OverviewCard from './OverviewCard';

function GraphicsCard() {
    const graphics = useQueryClient().getQueryData(["graphics"]);
    const data = graphics?.controllers[0]
    const graphicsData = [
        {
          key: "Model",
          value: data?.model,
        },
        {
          key: "BUS",
          value: data?.bus
        },
        {
          key: "VRAM",
          value: data?.vram+' MB'
        },
      ];
    return (
      <div>
        <OverviewCard title="Graphics" data={graphicsData} />
      </div>
    );
}

export default GraphicsCard
