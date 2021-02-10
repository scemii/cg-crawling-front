import React from "react";
import Switch from "@material-ui/core/Switch";

export default function Switches({ handleChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2 style={{ color: "#D367C1", fontWeight: "bold" }}>Toggle view</h2>
      <Switch
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
