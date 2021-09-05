import React from "react";

function OverviewCard({ data, title }) {
  return (
    <div
      style={{ background: "#5E609C", minHeight: "200px" }}
      className="p-4 rounded-xl text-white w-80 m-2"
    >
      <div className="text-center text-xl font-bold mb-2">{title}</div>
      <table className="w-full">
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td className="pr-1">{row.key}</td>
              <td>:</td>
              <td className="pl-3">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OverviewCard;
