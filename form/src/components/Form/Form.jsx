import { Input, Modal } from "@mui/material";
import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Form({ handleClose, show }) {
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {},
  });
  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <div className="form-container">
          <Input
            className="input"
            id="text"
            type={"text"}
            value={formik.values.text}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
      </Modal>
    </div>
  );
}
