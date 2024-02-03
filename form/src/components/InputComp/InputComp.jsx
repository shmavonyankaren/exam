import React from "react";
import { Input } from "@mui/material";
import "./InputComp.css";
export default function InputComp({ formik }) {
  return (
    <div>
      <p className="label-1">Your Name</p>
      <Input
        className="input"
        id="text"
        type={"text"}
        value={formik.values.text}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      />
      {formik.touched.text && formik.errors.text ? (
        <p className="error">{formik.errors.text}</p>
      ) : null}
    </div>
  );
}
