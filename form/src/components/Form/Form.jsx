import { Input, Modal } from "@mui/material";
import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import handlerSubmit from "../../handlers/handlerSubmit";
import validation from "../../utils/valitation";
import { Button } from "@mui/material";
export default function Form({ handleClose, show }) {
  const formik = useFormik({
    initialValues: {
      text: "",
      textarea: "",
    },
    validationSchema: validation(),
    onSubmit: handlerSubmit,
  });
  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit} className="form-container">
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
          <textarea
            id="textarea"
            name="w3review"
            rows="4"
            cols="50"
            value={formik.values.textarea}
            onChange={formik.handleChange}
          ></textarea>
          <label>Favorite food</label>
          <select name="cars" id="cars">
            <option value="volvo">Pizza</option>
            <option value="saab">Tacco</option>=
            <option value="audi">Burger</option>
          </select>
          <Button type="submit">Send</Button>
        </form>
      </Modal>
    </div>
  );
}
