import React from "react";
import { FormControl } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import "./SelectComp.css";
export default function SelectComp({ formik, arrayOfOptions }) {
  return (
    <div className="select-div">
      <p>Select Food</p>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
        <Select
          id="selectInput"
          name="selectInput"
          required={true}
          value={formik.values.selectInput}
          onChange={formik.handleChange}
        >
          {arrayOfOptions?.map((option) => (
            <MenuItem id={option} key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
