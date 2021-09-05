import React from "react";
import { useQueryClient } from "react-query";
import OverviewCard from "./OverviewCard";

function MemoryCard() {
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
    
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

  const memory = useQueryClient().getQueryData(["mem"]);
  const memoryData = [
    {
      key: "Total",
      value: formatBytes(memory?.total),
    },
    {
      key: "Free",
      value: formatBytes(memory?.free),
    },
    {
      key: "Used",
      value: formatBytes(memory?.used),
    },
    {
      key: "Active",
      value: formatBytes(memory?.active),
    },
    {
      key: "Avaiable",
      value: formatBytes(memory?.available),
    },
  ];
  return (
    <div>
      <OverviewCard title="Memory" data={memoryData} />
    </div>
  );
}

export default MemoryCard;
