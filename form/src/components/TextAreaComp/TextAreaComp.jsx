import React from "react";
import "./TextAreaComp.css";
export default function TextAreaComp({ formik }) {
  return (
    <div>
      <p className="label">How'd you like us to prepare?</p>
      <textarea
        id="textarea"
        rows="4"
        cols="50"
        value={formik.values.textarea}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
      ></textarea>
      {formik.touched.textarea && formik.errors.textarea ? (
        <p className="error">{formik.errors.textarea}</p>
      ) : null}
    </div>
  );
}
