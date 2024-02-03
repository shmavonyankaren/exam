import { Input, Modal } from "@mui/material";
import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import handlerSubmit from "../../handlers/handlerSubmit";
import validation from "../../utils/valitation";

export default function Form({ handleClose, show }) {
  const formik = useFormik({
    initialValues: {
      text: "",
    },
    validationSchema: validation(),
    onSubmit: handlerSubmit,
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
          {formik.touched.text && formik.errors.text ? (
            <p>{formik.errors.text}</p>
          ) : null}
        </div>
      </Modal>
    </div>
  );
}
