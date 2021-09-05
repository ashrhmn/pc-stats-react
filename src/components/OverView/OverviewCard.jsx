import React from "react";

function OverviewCard({ data, title }) {
  return (
    <div
      style={{ background: "#5E609C", minHeight: "180px" }}
      className="p-4 rounded-xl text-white w-80"
    >
      <div className="text-center text-xl font-bold mb-2">{title}</div>
      <table className="table-auto w-full">
        <tbody>
          {data?.map((row, index) => (
            <tr key={index}>
              <td className="text-right pr-4">{row.key} :</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OverviewCard;
