import { FormControl, Input, Modal } from "@mui/material";
import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import handlerSubmit from "../../handlers/handlerSubmit";
import validation from "../../utils/valitation";
import { Button } from "@mui/material";
import { Select, MenuItem } from "@mui/material";

export default function Form({ handleClose, show }) {
  const formik = useFormik({
    initialValues: {
      text: "",
      textarea: "",
      selectInput: "",
    },
    validationSchema: validation(),
    onSubmit: handlerSubmit,
  });
  let arrayOfOptions = ["Pizza", "Tacco", "Burger"];
  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <form
          id="form"
          onSubmit={formik.handleSubmit}
          className="form-container"
        >
          <p>Your Name</p>

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
          <p>How'd you like us to prepare?</p>
          <textarea
            id="textarea"
            rows="4"
            cols="50"
            value={formik.values.textarea}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          ></textarea>
          {formik.touched.text && formik.errors.text ? (
            <p className="error">{formik.errors.text}</p>
          ) : null}
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

          <Button variant="contained" type="submit">
            Order{" "}
          </Button>
        </form>
      </Modal>
    </div>
  );
}
