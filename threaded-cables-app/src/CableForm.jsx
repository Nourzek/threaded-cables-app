import React, { useState } from "react";

const cableTypes = ["Type A", "Type B", "Type C"];

export default function CableForm() {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        start: "",
        destination: "",
        type: "",
        amount: 0,
        length: 0,
        done: false,
      },
    ]);
  };

  const updateRow = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  return (
    <div>
      <button onClick={addRow}>Add Cable</button>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", fontWeight: "bold", marginTop: "1rem" }}>
        <div>#</div>
        <div>Starting Point</div>
        <div>Destination</div>
        <div>Type</div>
        <div>Amount</div>
        <div>Length</div>
        <div>Total</div>
        <div>Done</div>
      </div>
      {rows.map((row, index) => (
        <div key={index} style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", alignItems: "center", marginTop: "0.5rem" }}>
          <div>{index + 1}</div>
          <input value={row.start} onChange={(e) => updateRow(index, "start", e.target.value)} />
          <input value={row.destination} onChange={(e) => updateRow(index, "destination", e.target.value)} />
          <select value={row.type} onChange={(e) => updateRow(index, "type", e.target.value)}>
            <option value="">Select</option>
            {cableTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <input type="number" value={row.amount} onChange={(e) => updateRow(index, "amount", Number(e.target.value))} />
          <input type="number" value={row.length} onChange={(e) => updateRow(index, "length", Number(e.target.value))} />
          <div>{row.amount * row.length}</div>
          <input type="checkbox" checked={row.done} onChange={(e) => updateRow(index, "done", e.target.checked)} />
        </div>
      ))}
    </div>
  );
}